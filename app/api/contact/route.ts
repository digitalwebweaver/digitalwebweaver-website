import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getClientIp, getLocation } from "@/lib/geo";

const TO = process.env.CONTACT_EMAIL ?? "info@digitalwebweaver.com";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const {
      service, budget,
      projectName, timeline, industry, description,
      firstName, lastName, email, phone, country, source, nda,
    } = body;

    if (!email || !firstName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const ip = getClientIp(req);
    const location = await getLocation(ip);

    await supabaseAdmin.from("inquiries").insert({
      source: "contact",
      name: `${firstName} ${lastName || ""}`.trim(),
      email, phone, service, budget, timeline, industry,
      project_name: projectName, description, country,
      found_via: source, nda: !!nda,
      ip, location,
      raw: body,
    });

    const { error } = await resend.emails.send({
      from: "Digital Web Weaver <info@digitalwebweaver.com>",
      to: [TO],
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName} — ${service || "General"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:8px;">
          <div style="background:#111;padding:20px 24px;border-radius:6px 6px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Project Enquiry</h2>
            <p style="color:#aaa;margin:4px 0 0;font-size:13px;">Digital Web Weaver — Contact Form</p>
          </div>
          <div style="background:#fff;padding:24px;border-radius:0 0 6px 6px;">

            <h3 style="color:#e91e63;font-size:14px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;">Step 1 — Service</h3>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr><td style="padding:8px 0;color:#555;width:160px;font-size:14px;">Service needed</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${service || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">Budget range</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${budget || "—"}</td></tr>
            </table>

            <h3 style="color:#e91e63;font-size:14px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;">Step 2 — Project</h3>
            <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
              <tr><td style="padding:8px 0;color:#555;width:160px;font-size:14px;">Project name</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${projectName || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">Timeline</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${timeline || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">Industry</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${industry || "—"}</td></tr>
            </table>
            <div style="background:#f5f5f5;padding:14px;border-radius:6px;margin-bottom:24px;">
              <p style="margin:0;font-size:14px;color:#333;line-height:1.6;">${description || "No description provided."}</p>
            </div>

            <h3 style="color:#e91e63;font-size:14px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;">Step 3 — Contact</h3>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr><td style="padding:8px 0;color:#555;width:160px;font-size:14px;">Name</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">Email</td><td style="padding:8px 0;font-weight:600;font-size:14px;"><a href="mailto:${email}" style="color:#e91e63;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">Phone / WhatsApp</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${phone || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">Country</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${country || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">Found us via</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${source || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#555;font-size:14px;">NDA requested</td><td style="padding:8px 0;font-weight:600;font-size:14px;">${nda ? "Yes" : "No"}</td></tr>
            </table>

            <div style="background:#e91e6315;border-left:3px solid #e91e63;padding:12px 16px;border-radius:4px;">
              <p style="margin:0;font-size:13px;color:#555;">Reply directly to this email to respond to <strong>${firstName}</strong> at <a href="mailto:${email}" style="color:#e91e63;">${email}</a></p>
            </div>
          </div>
          <p style="text-align:center;color:#aaa;font-size:12px;margin-top:16px;">Digital Web Weaver · digitalwebweaver.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
