import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getClientIp, getLocation } from "@/lib/geo";
import { parseUserAgent } from "@/lib/userAgent";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const type = body.type;
  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
  if (!sessionId) return NextResponse.json({ ok: false }, { status: 400 });

  if (type === "pageview") {
    const path = typeof body.path === "string" ? body.path : "/";
    const title = typeof body.title === "string" ? body.title : null;
    const referrer = typeof body.referrer === "string" && body.referrer ? body.referrer : null;

    const { data: existing } = await supabaseAdmin
      .from("visits")
      .select("id")
      .eq("session_id", sessionId)
      .maybeSingle();

    if (!existing) {
      const ip = getClientIp(req);
      const location = await getLocation(ip);
      const ua = req.headers.get("user-agent") || "";
      const { browser, os, device } = parseUserAgent(ua);

      await supabaseAdmin.from("visits").insert({
        session_id: sessionId,
        ip,
        location,
        user_agent: ua,
        browser,
        os,
        device,
        referrer,
        entry_page: path,
        exit_page: path,
        page_count: 1,
      });
    } else {
      await supabaseAdmin
        .from("visits")
        .update({ exit_page: path, last_seen_at: new Date().toISOString() })
        .eq("session_id", sessionId);
      await supabaseAdmin.rpc("increment_page_count", { sid: sessionId });
    }

    const { data: pv } = await supabaseAdmin
      .from("page_views")
      .insert({ session_id: sessionId, path, title })
      .select("id")
      .single();

    return NextResponse.json({ ok: true, pageViewId: pv?.id ?? null });
  }

  if (type === "ping") {
    const pageViewId = typeof body.pageViewId === "string" ? body.pageViewId : null;
    const seconds = typeof body.seconds === "number" ? Math.round(body.seconds) : 0;
    if (pageViewId && seconds > 0) {
      await supabaseAdmin.rpc("increment_durations", { pv_id: pageViewId, sid: sessionId, secs: seconds });
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: true });
}
