import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const phraseIndex = searchParams.get('phraseIndex');
        const locale = searchParams.get('locale');

        if (phraseIndex === null || !locale) {
            return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
        }

        const { data: votes, error } = await supabaseAdmin
            .from('phrase_votes')
            .select('vote_type')
            .eq('phrase_index', parseInt(phraseIndex))
            .eq('locale', locale);

        if (error) throw error;

        const upvotes = votes.filter(v => v.vote_type === 'up').length;
        const downvotes = votes.filter(v => v.vote_type === 'down').length;

        return NextResponse.json({ upvotes, downvotes });
    } catch (error: any) {
        console.error('Error fetching stats:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
