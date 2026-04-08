import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Get phrase from query params
        const phrase = searchParams.get('phrase');

        if (!phrase) {
            return new Response('Missing phrase', { status: 400 });
        }

        // You can customize the look here
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
                        backgroundColor: '#000',
                        backgroundImage: 'radial-gradient(circle at 25% 25%, #111 0%, #000 100%)',
                        padding: '80px',
                        position: 'relative',
                    }}
                >
                    {/* Watermark Logo */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src="https://desmotiva.tech/logo-rosto-desmotiva.dev.png"
                            width="40"
                            height="40"
                            style={{ borderRadius: '8px' }}
                        />
                        <span
                            style={{
                                marginLeft: '12px',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#fff',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            desmotiva.dev
                        </span>
                    </div>

                    {/* Quote Mark */}
                    <div
                        style={{
                            fontSize: '120px',
                            color: '#333',
                            position: 'absolute',
                            top: '120px',
                            left: '80px',
                            opacity: 0.5,
                            fontFamily: 'serif',
                        }}
                    >
                        “
                    </div>

                    {/* Main Phrase */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            width: '100%',
                            padding: '0 40px',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: phrase.length > 100 ? '48px' : '64px',
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1.2,
                                margin: 0,
                                padding: 0,
                                wordBreak: 'break-word',
                                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.5))',
                            }}
                        >
                            {phrase}
                        </h1>
                    </div>

                    {/* URL Footer */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            fontSize: '20px',
                            color: '#666',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}
                    >
                        desmotiva.dev • sua dose de realidade
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
