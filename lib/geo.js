// req is a Node/Next API request (plain header object)
export function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (fwd) return String(fwd).split(",")[0].trim();
  return req.headers["x-real-ip"] || null;
}

export async function getLocation(ip) {
  if (!ip || ip === "::1" || ip.startsWith("127.") || ip.startsWith("192.168.")) return null;
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.error) return null;
    const parts = [data.city, data.region, data.country_name].filter(Boolean);
    return parts.length ? parts.join(", ") : null;
  } catch {
    return null;
  }
}
