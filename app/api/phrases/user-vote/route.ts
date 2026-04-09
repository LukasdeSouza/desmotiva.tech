import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phraseId, voteType, userId } = body;

    if (!phraseId || !voteType || !userId) {
      return NextResponse.json({
        success: false,
        error: 'Parâmetros inválidos'
      }, { status: 400 });
    }

    if (!['up', 'down'].includes(voteType)) {
      return NextResponse.json({
        success: false,
        error: 'Tipo devote inválido'
      }, { status: 400 });
    }

    // Verificar se usuário já votou nesta frase
    const { data: existingVote } = await supabaseAdmin
      .from('user_phrase_votes')
      .select('*')
      .eq('user_id', userId)
      .eq('phrase_id', phraseId)
      .single();

    let voteChange = 0;

    if (existingVote) {
      if (existingVote.vote_type === voteType) {
        // Usuário está votando same way - remover vote (toggle off)
        await supabaseAdmin
          .from('user_phrase_votes')
          .delete()
          .eq('id', existingVote.id);

        voteChange = voteType === 'up' ? -1 : 1;
      } else {
        // Usuário está mudando de voto
        await supabaseAdmin
          .from('user_phrase_votes')
          .update({ vote_type: voteType })
          .eq('id', existingVote.id);

        // Adjust counts: remove old vote, add new vote
        voteChange = voteType === 'up' ? 2 : -2;
      }
    } else {
      // Novo vote
      await supabaseAdmin
        .from('user_phrase_votes')
        .insert({
          user_id: userId,
          phrase_id: phraseId,
          vote_type: voteType,
        });

      voteChange = voteType === 'up' ? 1 : -1;
    }

    // Atualizar contadores na frase
    if (voteChange !== 0) {
      const { data: phrase } = await supabaseAdmin
        .from('user_phrases')
        .select('upvotes, downvotes')
        .eq('id', phraseId)
        .single();

      if (phrase) {
        const newUpvotes = voteType === 'up' 
          ? phrase.upvotes + voteChange 
          : (voteChange === 2 ? phrase.upvotes + 1 : (voteChange === -2 ? phrase.upvotes - 1 : phrase.upvotes));
        
        const newDownvotes = voteType === 'down'
          ? phrase.downvotes + voteChange
          : (voteChange === -2 ? phrase.downvotes + 1 : (voteChange === 2 ? phrase.downvotes - 1 : phrase.downvotes));

        await supabaseAdmin
          .from('user_phrases')
          .update({
            upvotes: Math.max(0, newUpvotes),
            downvotes: Math.max(0, newDownvotes),
          })
          .eq('id', phraseId);
      }
    }

    // Buscar estado atual do vote
    const { data: currentVote } = await supabaseAdmin
      .from('user_phrase_votes')
      .select('vote_type')
      .eq('user_id', userId)
      .eq('phrase_id', phraseId)
      .single();

    return NextResponse.json({
      success: true,
      data: {
        userVote: currentVote?.vote_type || null,
        voteChange
      }
    });

  } catch (error) {
    console.error('Vote error:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}