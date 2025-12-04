type NetlifyEvent = {
  httpMethod: string;
  headers: Record<string, string | undefined>;
  body?: string | null;
};

type NetlifyResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

const jsonHeaders = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Missing request body" }),
    };
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Invalid JSON payload" }),
    };
  }

  const eventName = typeof payload.event === "string" ? payload.event : "unknown";
  const visitTimestamp =
    typeof payload.timestamp === "string" ? payload.timestamp : new Date().toISOString();
  const visitPath = typeof payload.path === "string" ? payload.path : "/";

  const visitorMeta = {
    event: eventName,
    timestamp: visitTimestamp,
    path: visitPath,
    userAgent: event.headers?.["user-agent"] ?? "unknown",
    ip:
      event.headers?.["x-nf-client-connection-ip"] ??
      event.headers?.["client-ip"] ??
      event.headers?.["x-forwarded-for"] ??
      "unknown",
  };

  console.info("[allies-visit]", JSON.stringify(visitorMeta));

  return {
    statusCode: 200,
    headers: jsonHeaders,
    body: JSON.stringify({ success: true }),
  };
};
