import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getClientIp, getLocation } from "@/lib/geo";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_EMAIL ?? "info@digitalwebweaver.com";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, timeline, budget, description, variant, formHeading } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const ip = getClientIp(req);
    const location = await getLocation(ip);

    await supabaseAdmin.from("inquiries").insert({
      source: "lead",
      name, email, phone, service, timeline, budget, description,
      variant, form_heading: formHeading,
      ip, location,
      raw: { name, email, phone, service, timeline, budget, description, variant, formHeading },
    });

    const { error } = await resend.emails.send({
      from: "Digital Web Weaver <info@digitalwebweaver.com>",
      to: [TO],
      replyTo: email,
      subject: `New lead: ${name} — ${formHeading || service || "Enquiry"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:8px;">
          <div style="background:#111;padding:20px 24px;border-radius:6px 6px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Lead Enquiry</h2>
            <p style="color:#aaa;margin:4px 0 0;font-size:13px;">${formHeading || "Service Page Form"}</p>
          </div>
          <div style="background:#fff;padding:24px;border-radius:0 0 6px 6px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:9px 0;color:#555;width:140px;font-size:14px;">Name</td><td style="padding:9px 0;font-weight:600;font-size:14px;">${name}</td></tr>
              <tr><td style="padding:9px 0;color:#555;font-size:14px;">Email</td><td style="padding:9px 0;font-size:14px;"><a href="mailto:${email}" style="color:#e91e63;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:9px 0;color:#555;font-size:14px;">Phone</td><td style="padding:9px 0;font-weight:600;font-size:14px;">${phone}</td></tr>` : ""}
              ${service ? `<tr><td style="padding:9px 0;color:#555;font-size:14px;">${variant === "hire" ? "Engagement" : "Service"}</td><td style="padding:9px 0;font-weight:600;font-size:14px;">${service}</td></tr>` : ""}
              ${timeline ? `<tr><td style="padding:9px 0;color:#555;font-size:14px;">Timeline</td><td style="padding:9px 0;font-weight:600;font-size:14px;">${timeline}</td></tr>` : ""}
              ${budget ? `<tr><td style="padding:9px 0;color:#555;font-size:14px;">Budget</td><td style="padding:9px 0;font-weight:600;font-size:14px;">${budget}</td></tr>` : ""}
            </table>
            ${description ? `
            <div style="background:#f5f5f5;padding:14px;border-radius:6px;margin-top:16px;">
              <p style="margin:0 0 6px;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:.06em;">Message</p>
              <p style="margin:0;font-size:14px;color:#333;line-height:1.6;">${description}</p>
            </div>` : ""}
            <div style="background:#e91e6315;border-left:3px solid #e91e63;padding:12px 16px;border-radius:4px;margin-top:20px;">
              <p style="margin:0;font-size:13px;color:#555;">Reply to <a href="mailto:${email}" style="color:#e91e63;">${email}</a></p>
            </div>
          </div>
          <p style="text-align:center;color:#aaa;font-size:12px;margin-top:16px;">Digital Web Weaver · digitalwebweaver.com</p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
