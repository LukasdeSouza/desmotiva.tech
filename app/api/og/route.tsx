import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const phrase = searchParams.get('phrase') || 'Sua dose diária de realidade';
        const category = searchParams.get('category') || '';

        const decodedPhrase = decodeURIComponent(phrase);

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0a0a0a',
                        backgroundImage: 'radial-gradient(ellipse at 50% 0%, #1a1a2e 0%, #0a0a0a 70%)',
                        padding: '80px',
                        position: 'relative',
                    }}
                >
                    {category && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '40px',
                                right: '40px',
                                backgroundColor: '#3b82f6',
                                color: '#fff',
                                padding: '8px 20px',
                                borderRadius: '20px',
                                fontSize: '18px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {category}
                        </div>
                    )}

                    <div
                        style={{
                            fontSize: '160px',
                            color: '#1e3a5f',
                            position: 'absolute',
                            top: '80px',
                            left: '60px',
                            fontFamily: 'Georgia, serif',
                            lineHeight: 1,
                        }}
                    >
                        "
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            width: '100%',
                            padding: '40px 20px',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: decodedPhrase.length > 80 ? '52px' : decodedPhrase.length > 50 ? '60px' : '72px',
                                fontWeight: 700,
                                color: '#ffffff',
                                lineHeight: 1.3,
                                margin: 0,
                                padding: 0,
                                wordBreak: 'break-word',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                            }}
                        >
                            {decodedPhrase}
                        </h1>
                    </div>

                    <div
                        style={{
                            marginTop: '40px',
                            fontSize: '24px',
                            color: '#3b82f6',
                            fontWeight: 500,
                        }}
                    >
                        #desmotivadev
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            fontSize: '18px',
                            color: '#666',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                        }}
                    >
                        desmotiva.dev
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: unknown) {
        console.error(`OG Image error: ${e}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}