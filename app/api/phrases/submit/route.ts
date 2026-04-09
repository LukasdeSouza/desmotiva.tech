import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseClient';
import { validateUserPhrase } from '@/lib/utils/phraseValidator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, category, authorId } = body;

    // Validar texto e categoria
    const validation = validateUserPhrase(text, category || 'general');
    
    if (!validation.valid) {
      return NextResponse.json({
        success: false,
        error: validation.errors.join(', ')
      }, { status: 400 });
    }

    // Inserir frase no banco (como pending)
    const { data, error } = await supabaseAdmin
      .from('user_phrases')
      .insert({
        text: text.trim(),
        category: (category || 'general').toLowerCase(),
        status: 'APPROVED', // Auto-aprovado por padrão (mudar para PENDING se quiser moderação)
        author_id: authorId || 'anonymous',
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting user phrase:', error);
      return NextResponse.json({
        success: false,
        error: 'Erro ao salvar frase'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: {
        id: data.id,
        text: data.text,
        category: data.category,
        status: data.status
      },
      message: 'Frase submetida com sucesso!'
    });

  } catch (error) {
    console.error('Submit phrase error:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

// GET para listar frases approved (para debug/testing)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'APPROVED';

    let query = supabaseAdmin
      .from('user_phrases')
      .select('*')
      .eq('status', status)
      .order('upvotes', { ascending: false });

    if (category && category !== 'all') {
      query = query.eq('category', category);
    }

    const { data, error } = await query.limit(50);

    if (error) {
      console.error('Error fetching user phrases:', error);
      return NextResponse.json({
        success: false,
        error: 'Erro ao buscar frases'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: data || []
    });

  } catch (error) {
    console.error('Get phrases error:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}