import { Resend } from "resend";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase";

async function requireAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  return !!session && session === process.env.ADMIN_PASSWORD;
}

export async function POST(req: Request) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { inquiryId, to, subject, message, attachments } = await req.json();

    if (!inquiryId || !to || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resendAttachments = (attachments ?? []).map((a: { filename: string; content: string }) => ({
      filename: a.filename,
      content: a.content,
    }));

    const { error } = await resend.emails.send({
      from: "Digital Web Weaver <info@digitalwebweaver.com>",
      to: [to],
      replyTo: "info@digitalwebweaver.com",
      subject: subject || "Re: Your enquiry — Digital Web Weaver",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#222;line-height:1.7;font-size:14.5px;">
          ${message.split("\n").map((line: string) => `<p style="margin:0 0 12px;">${line || "&nbsp;"}</p>`).join("")}
          <p style="margin-top:28px;color:#888;font-size:13px;">— Digital Web Weaver<br/>info@digitalwebweaver.com · digitalwebweaver.com</p>
        </div>
      `,
      attachments: resendAttachments.length ? resendAttachments : undefined,
    });

    if (error) {
      console.error("Reply send error:", error);
      return NextResponse.json({ error: "Failed to send reply" }, { status: 500 });
    }

    await supabaseAdmin.from("replies").insert({
      inquiry_id: inquiryId,
      to_email: to,
      subject,
      message,
      attachments: resendAttachments.length ? resendAttachments.map((a: { filename: string }) => ({ filename: a.filename })) : null,
    });

    await supabaseAdmin.from("inquiries").update({ status: "replied" }).eq("id", inquiryId);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Reply API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
