import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getClientIp, getLocation } from "@/lib/geo";

const TO = process.env.CONTACT_EMAIL || "info@digitalwebweaver.com";

const LABELS = {
  name: "Name",
  email: "Email",
  phone: "Phone / WhatsApp",
  company: "Company / Project",
  service: "Service needed",
  businessType: "Business type",
  need: "What they need",
  budget: "Budget range",
  timeline: "Timeline",
  industry: "Industry",
  desc: "Message",
  message: "Message",
  projectName: "Project name",
  country: "Country",
  source: "Found us via",
};

export async function POST(req) {
  try {
    const body = await req.json();
    const fields = body && typeof body === "object" ? body : {};
    const { name, email } = fields;
    const page = typeof body.page === "string" ? body.page : "";

    if (!email || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const ip = getClientIp(req);
    const location = await getLocation(ip);

    const { page: _page, ...formFields } = fields;

    await supabaseAdmin.from("inquiries").insert({
      source: "lead",
      name,
      email,
      phone: formFields.phone || null,
      page,
      ip,
      location,
      raw: formFields,
    });

    const rows = Object.entries(formFields)
      .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
      .map(([k, v]) => {
        const label = LABELS[k] || k;
        return `<tr><td style="padding:9px 0;color:#555;width:160px;font-size:14px;vertical-align:top;">${label}</td><td style="padding:9px 0;font-weight:600;font-size:14px;">${String(v)}</td></tr>`;
      })
      .join("");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Digital Web Weaver <info@digitalwebweaver.com>",
      to: [TO],
      replyTo: email,
      subject: `New lead: ${name}${page ? " — " + page : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:8px;">
          <div style="background:#111;padding:20px 24px;border-radius:6px 6px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Lead Enquiry</h2>
            <p style="color:#aaa;margin:4px 0 0;font-size:13px;">${page || "digitalwebweaver.com"}</p>
          </div>
          <div style="background:#fff;padding:24px;border-radius:0 0 6px 6px;">
            <table style="width:100%;border-collapse:collapse;">${rows}</table>
            <div style="background:#e91e6315;border-left:3px solid #e91e63;padding:12px 16px;border-radius:4px;margin-top:20px;">
              <p style="margin:0;font-size:13px;color:#555;">Reply to <a href="mailto:${email}" style="color:#e91e63;">${email}</a></p>
            </div>
          </div>
          <p style="text-align:center;color:#aaa;font-size:12px;margin-top:16px;">Digital Web Weaver · digitalwebweaver.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
