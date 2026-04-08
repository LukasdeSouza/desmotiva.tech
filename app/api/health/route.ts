import { NextResponse } from 'next/server';

console.log('>>> [API/HEALTH] File loaded');

export async function GET() {
    console.log('>>> [API/HEALTH] Handler hit');
    return NextResponse.json({ status: 'ok' });
}
