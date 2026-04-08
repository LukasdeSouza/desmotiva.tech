import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    console.log('>>> [API/VOTE] Request received');
    try {
        const body = await req.json();
        console.log('>>> [API/VOTE] Body:', body);
        const { phraseIndex, locale, voteType } = body;

        if (phraseIndex === undefined || !locale || !['up', 'down'].includes(voteType)) {
            console.log('>>> [API/VOTE] Invalid params');
            return NextResponse.json({ error: 'Missing or invalid parameters' }, { status: 400 });
        }

        console.log('>>> [API/VOTE] Getting cookies...');
        const cookieStore = await cookies();
        let externalId = cookieStore.get('guest_id')?.value;
        console.log('>>> [API/VOTE] External ID:', externalId);

        if (!externalId) {
            console.log('>>> [API/VOTE] No guest_id cookie found');
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        console.log('>>> [API/VOTE] Resolving user in DB...');
        let { data: user, error: userError } = await supabaseAdmin
            .from('users')
            .select('id')
            .eq('clerk_id', externalId)
            .single();

        console.log('>>> [API/VOTE] User resolve result:', { user, userError });

        if (userError && userError.code !== 'PGRST116') { // PGRST116 is code for "no rows" in single()
            console.error('>>> [API/VOTE] User fetch error:', userError);
            throw userError;
        }

        if (!user) {
            console.log('>>> [API/VOTE] Creating new guest user...');
            const { data: newUser, error: createError } = await supabaseAdmin
                .from('users')
                .insert({
                    clerk_id: externalId,
                    email: `${externalId}@guest.desmotiva.tech`,
                    display_name: `Guest ${externalId.slice(-4)}`
                })
                .select('id')
                .single();

            if (createError) {
                console.error('>>> [API/VOTE] Create user error:', createError);
                throw createError;
            }
            user = newUser;
            console.log('>>> [API/VOTE] New user created:', user);
        }

        console.log('>>> [API/VOTE] Upserting vote...');
        const { error: voteError } = await supabaseAdmin
            .from('phrase_votes')
            .upsert({
                phrase_index: phraseIndex,
                locale: locale,
                user_id: user.id,
                vote_type: voteType,
                created_at: new Date().toISOString()
            }, {
                onConflict: 'phrase_index, locale, user_id'
            });

        if (voteError) {
            console.error('>>> [API/VOTE] Upsert vote error:', voteError);
            throw voteError;
        }

        console.log('>>> [API/VOTE] Vote successful');
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('>>> [API/VOTE] Fatal error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
