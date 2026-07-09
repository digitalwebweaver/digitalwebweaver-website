import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getClientIp, getLocation } from "@/lib/geo";

const TO = process.env.CONTACT_EMAIL ?? "info@digitalwebweaver.com";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const ip = getClientIp(req);
    const location = await getLocation(ip);

    await supabaseAdmin.from("inquiries").insert({
      source: "subscribe",
      email,
      ip, location,
      raw: { email },
    });

    const { error } = await resend.emails.send({
      from: "Digital Web Weaver <info@digitalwebweaver.com>",
      to: [TO],
      replyTo: email,
      subject: `New newsletter subscriber: ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;background:#fff;padding:32px;border-radius:8px;border:1px solid #eee;">
          <h2 style="color:#111;margin:0 0 8px;">New Newsletter Subscriber</h2>
          <p style="color:#555;margin:0 0 24px;font-size:14px;">Someone subscribed via the website footer.</p>
          <div style="background:#f5f5f5;padding:16px;border-radius:6px;">
            <p style="margin:0;font-size:16px;font-weight:600;color:#111;">${email}</p>
          </div>
          <p style="color:#aaa;font-size:12px;margin-top:24px;">Digital Web Weaver · digitalwebweaver.com</p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error: "Failed" }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
