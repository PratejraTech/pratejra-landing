import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Only allow POST requests
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method Not Allowed' },
        { status: 405 }
      );
    }

    const body = await request.text();
    if (!body) {
      return NextResponse.json(
        { error: 'Missing request body' },
        { status: 400 }
      );
    }

    let payload;
    try {
      payload = JSON.parse(body);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    const eventName = typeof payload.event === 'string' ? payload.event : 'unknown';
    const visitTimestamp = typeof payload.timestamp === 'string' ? payload.timestamp : new Date().toISOString();
    const visitPath = typeof payload.path === 'string' ? payload.path : '/';

    const visitorMeta = {
      event: eventName,
      timestamp: visitTimestamp,
      path: visitPath,
      userAgent: request.headers.get('User-Agent') || 'unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      country: request.headers.get('x-vercel-ip-country') || 'unknown',
    };

    // Log to console (can be enhanced with proper logging service)
    console.log('[allies-visit]', JSON.stringify(visitorMeta));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}