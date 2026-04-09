-- ============================================
-- USER SUBMITTED PHRASES
-- ============================================

-- Tabela de frases submetidas pelos usuários
CREATE TABLE IF NOT EXISTS user_phrases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    text TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'general',
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, APPROVED, REJECTED
    author_id VARCHAR(255),
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de votos dos usuários nas frases
CREATE TABLE IF NOT EXISTS user_phrase_votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR(255) NOT NULL,
    phrase_id UUID NOT NULL REFERENCES user_phrases(id) ON DELETE CASCADE,
    vote_type VARCHAR(10) NOT NULL, -- 'up' or 'down'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, phrase_id)
);

-- Índices para otimização
CREATE INDEX IF NOT EXISTS idx_user_phrases_status ON user_phrases(status);
CREATE INDEX IF NOT EXISTS idx_user_phrases_category ON user_phrases(category);
CREATE INDEX IF NOT EXISTS idx_user_phrases_upvotes ON user_phrases(upvotes DESC);
CREATE INDEX IF NOT EXISTS idx_user_phrase_votes_phrase ON user_phrase_votes(phrase_id);

-- Habilitar RLS (Row Level Security) - opcional
-- ALTER TABLE user_phrases ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE user_phrase_votes ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE user_phrases IS 'Frases submetidas pelos usuários';
COMMENT ON TABLE user_phrase_votes IS 'Votos dos usuários nas frases';