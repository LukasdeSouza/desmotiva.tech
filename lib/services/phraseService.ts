import { supabaseAdmin } from '../supabaseClient';
import { phrases as originalPhrases } from '@/app/utils/mocks';

export interface PhraseWithSource {
  id: string | number;
  text: string;
  category: string;
  source: 'original' | 'user';
  upvotes?: number;
  downvotes?: number;
}

export class PhraseService {
  /**
   * Busca frases do banco (originais + usuários aprovados)
   */
  static async getAllPhrases(): Promise<PhraseWithSource[]> {
    // Buscar frases dos usuários (aprovadas)
    const { data: userPhrases } = await supabaseAdmin
      .from('user_phrases')
      .select('id, text, category, upvotes, downvotes')
      .eq('status', 'APPROVED')
      .order('upvotes', { ascending: false });

    // Converter frases originais para o mesmo formato
    const originalPhrasesFormatted: PhraseWithSource[] = originalPhrases.map((p, index) => ({
      id: index,
      text: p.text,
      category: p.categories?.[0] || 'general',
      source: 'original' as const,
      upvotes: 0,
      downvotes: 0,
    }));

    // Converter frases dos usuários
    const userPhrasesFormatted: PhraseWithSource[] = (userPhrases || []).map(p => ({
      id: p.id,
      text: p.text,
      category: p.category || 'general',
      source: 'user' as const,
      upvotes: p.upvotes || 0,
      downvotes: p.downvotes || 0,
    }));

    // Mesclar todas as frases
    return [...originalPhrasesFormatted, ...userPhrasesFormatted];
  }

  /**
   * Busca frase aleatória (misturando originais + usuários)
   */
  static async getRandomPhrase(): Promise<PhraseWithSource> {
    const allPhrases = await this.getAllPhrases();
    
    // Se tiver frases de usuários, dar peso maior a elas (opcional)
    // Por agora, apenas shuffle normal
    const randomIndex = Math.floor(Math.random() * allPhrases.length);
    
    return allPhrases[randomIndex];
  }

  /**
   * Busca frases por categoria
   */
  static async getPhrasesByCategory(category: string): Promise<PhraseWithSource[]> {
    const allPhrases = await this.getAllPhrases();
    
    if (category === 'all' || !category) {
      return allPhrases;
    }
    
    return allPhrases.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Estatísticas das frases dos usuários
   */
  static async getUserPhrasesStats() {
    const { count: total } = await supabaseAdmin
      .from('user_phrases')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'APPROVED');

    const { data: topPhrases } = await supabaseAdmin
      .from('user_phrases')
      .select('id, text, upvotes, downvotes')
      .eq('status', 'APPROVED')
      .order('upvotes', { ascending: false })
      .limit(10);

    return {
      totalApproved: total || 0,
      topPhrases: topPhrases || []
    };
  }
}