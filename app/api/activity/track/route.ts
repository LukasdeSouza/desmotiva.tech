import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabaseClient';
import { ActivityService } from '@/lib/services/activityService';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const guestIdCookie = cookieStore.get('guest_id');
    
    // Get guestId from cookie or from request body
    const body = await request.json();
    const { action, data, guestId: clientGuestId } = body;
    
    // Use client-provided guestId if available, otherwise use cookie
    let userId = clientGuestId || guestIdCookie?.value;
    let isNewGuest = false;

    if (!userId) {
      // Create new guest ID
      userId = `guest_${crypto.randomUUID()}`;
      isNewGuest = true;

      // Ensure guest user exists in DB via Supabase
      try {
        const { data: existingUser } = await supabaseAdmin
          .from('users')
          .select('id')
          .eq('clerk_id', userId)
          .single();

        if (!existingUser) {
          const { error: createError } = await supabaseAdmin
            .from('users')
            .insert({
              clerk_id: userId,
              email: `${userId}@desmotiva.dev`,
              display_name: `Visitante ${userId.substring(6, 10)}`,
              avatar_url: null,
            });

          if (createError) {
            console.error('Error creating guest user:', createError);
          }
        }
      } catch (error) {
        console.error('Error ensuring guest user:', error);
      }
    }

    let result;

    switch (action) {
      case 'generate_phrase':
        result = await ActivityService.trackPhraseGeneration(
          userId,
          data.phraseIndex,
          data.locale || 'pt'
        );
        break;

      case 'share':
        result = await ActivityService.trackShare(
          userId,
          data.platform,
          data.phraseIndex
        );
        break;

      case 'login':
        // Login action might be redundant if we don't have real login anymore
        // But we can keep it to track "sessions" if we want
        await ActivityService.trackLogin(userId);
        result = { success: true };
        break;

      case 'toggle_favorite':
        result = await ActivityService.toggleFavoritePhrase(
          userId,
          data.phraseIndex
        );
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    const response = NextResponse.json({
      success: true,
      data: result,
    });

    if (isNewGuest && userId) {
      response.cookies.set('guest_id', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
        path: '/',
      });
    }

    return response;

  } catch (error) {
    console.error('Activity tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const guestIdCookie = cookieStore.get('guest_id');
    const clerkId = guestIdCookie?.value || 'guest_user';

    // Resolve internal ID
    // If not found, use a fallback or return null?
    // GET requests might be for initial load.
    // If user doesn't exist, we can't show stats.

    const { data: user } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('clerk_id', clerkId)
      .single();

    const internalUserId = user?.id;

    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    let result;

    if (internalUserId) {
      switch (action) {
        case 'summary':
          result = await ActivityService.getActivitySummary(internalUserId);
          break;

        case 'recent':
          const limit = parseInt(searchParams.get('limit') || '20');
          result = await ActivityService.getRecentActivities(internalUserId, limit);
          break;

        case 'stats':
          result = await ActivityService.getActivityStats(internalUserId);
          break;

        case 'is_favorite':
          const phraseIndex = parseInt(searchParams.get('phraseIndex') || '0');
          result = {
            isFavorite: await ActivityService.isPhraseFavorited(internalUserId, phraseIndex)
          };
          break;

        default:
          return NextResponse.json(
            { error: 'Invalid action' },
            { status: 400 }
          );
      }
    } else {
      // User not found, return empty/defaults
      result = action === 'is_favorite' ? { isFavorite: false } : {};
    }

    return NextResponse.json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error('Activity fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
