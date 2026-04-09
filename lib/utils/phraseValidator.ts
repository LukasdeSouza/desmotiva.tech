// Palavras proibidas para filtragem de frases
// Lista de palavras ofensivas em português brasileiro
export const FORBIDDEN_WORDS = [
  'pqp',
  'puta',
  'puta que pariu',
  'putaquepariu',
  'merda',
  'vtnc',
  'vai tomar no cu',
  'vai se foder',
  'vsf',
  'vtnm',
  'filha da puta',
  'filho da puta',
  'cuzao',
  'cuzao',
  'desgraça',
  'desgraçado',
  'viado',
  'veado',
  'bicha',
  'bunda',
  'bundas',
  'piça',
  'piroca',
  'porra',
  'caralho',
  'cacete',
  'foder',
  'fodido',
  'fodida',
  'piroca',
  'buceta',
  'rola',
  'rola',
  'verga',
  'xoxota',
  'xota',
  'fdp',
  'cuzao',
  'lixo',
  'nojento',
  'nojenta',
  'otario',
  'otária',
  'burro',
  'burra',
  'idiota',
  'imbecil',
  'retardado',
  'retardada',
  'desesperado',
  'desesperada',
  'vagabundo',
  'vagabunda',
  'vadia',
  'piranha',
  'prostituta',
  'rapariga',
];

export function validatePhrase(text: string): { valid: boolean; hasProfanity: boolean; foundWords: string[] } {
  const textLower = text.toLowerCase();
  const normalizedText = textLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  const foundWords: string[] = [];
  
  for (const word of FORBIDDEN_WORDS) {
    // Check for the word with word boundaries
    const wordNormalized = word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const regex = new RegExp(`\\b${escapeRegex(wordNormalized)}\\b`, 'i');
    
    if (regex.test(normalizedText) || textLower.includes(wordNormalized)) {
      foundWords.push(word);
    }
  }
  
  const hasProfanity = foundWords.length > 0;
  
  return {
    valid: !hasProfanity,
    hasProfanity,
    foundWords: [...new Set(foundWords)], // Remove duplicates
  };
}

function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Validar categoria
export function validateCategory(category: string): boolean {
  const validCategories = [
    'javascript',
    'typescript',
    'react',
    'python',
    'git',
    'bugs',
    'legacy',
    'carreira',
    'devops',
    'database',
    'general',
  ];
  
  return validCategories.includes(category.toLowerCase());
}

// Validar comprimento
export function validateLength(text: string): { valid: boolean; message: string } {
  if (text.length < 10) {
    return { valid: false, message: 'Frase muito curta (mínimo 10 caracteres)' };
  }
  
  if (text.length > 500) {
    return { valid: false, message: 'Frase muito longa (máximo 500 caracteres)' };
  }
  
  return { valid: true, message: 'Ok' };
}

// Validação completa
export function validateUserPhrase(text: string, category: string): { 
  valid: boolean; 
  errors: string[];
} {
  const errors: string[] = [];
  
  // Validar texto
  const lengthCheck = validateLength(text);
  if (!lengthCheck.valid) {
    errors.push(lengthCheck.message);
  }
  
  const profanityCheck = validatePhrase(text);
  if (profanityCheck.hasProfanity) {
    errors.push(`Palavras não permitidas detectadas: ${profanityCheck.foundWords.join(', ')}`);
  }
  
  // Validar categoria
  if (!validateCategory(category)) {
    errors.push('Categoria inválida');
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}