export async function onRequest(context) {
  const { request, env } = context;

  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  }

  const body = await request.text();
  if (!body) {
    return new Response(JSON.stringify({ error: 'Missing request body' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  }

  let payload;
  try {
    payload = JSON.parse(body);
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  }

  const eventName = typeof payload.event === 'string' ? payload.event : 'unknown';
  const visitTimestamp = typeof payload.timestamp === 'string' ? payload.timestamp : new Date().toISOString();
  const visitPath = typeof payload.path === 'string' ? payload.path : '/';

  const visitorMeta = {
    event: eventName,
    timestamp: visitTimestamp,
    path: visitPath,
    userAgent: request.headers.get('User-Agent') || 'unknown',
    ip: request.headers.get('CF-Connecting-IP') || 'unknown',
    country: request.cf?.country || 'unknown',
  };

  // Log to Cloudflare Workers Logs
  console.log('[allies-visit]', JSON.stringify(visitorMeta));

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}