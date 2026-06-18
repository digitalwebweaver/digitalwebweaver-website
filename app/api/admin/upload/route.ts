import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { isAdminAuthed } from "@/lib/adminAuth";
import { slugify } from "@/lib/slug";

const BUCKET = "media";
const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/avif", "image/gif", "image/svg+xml"];
const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/avif": "avif",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

export async function POST(req: Request) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (!ALLOWED.includes(file.type)) {
      return NextResponse.json({ error: "Only image files are allowed (PNG, JPG, WebP, AVIF, GIF, SVG)" }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "Image is too large (max 6 MB)" }, { status: 400 });
    }

    // Folder hint (e.g. "portfolio" / "blog") + a clean, unique filename.
    const folderRaw = form.get("folder");
    const folder = typeof folderRaw === "string" && /^[a-z0-9-]{1,40}$/.test(folderRaw) ? folderRaw : "uploads";

    const base = slugify(file.name.replace(/\.[^.]+$/, "")).slice(0, 60) || "image";
    const rand = Math.random().toString(36).slice(2, 8);
    const ext = EXT[file.type] || "bin";
    const path = `${folder}/${base}-${rand}.${ext}`;

    const buffer = Buffer.from(await file.arrayBuffer());

    const { error } = await supabaseAdmin.storage.from(BUCKET).upload(path, buffer, {
      contentType: file.type,
      upsert: false,
      cacheControl: "31536000",
    });
    if (error) {
      console.error("Upload error:", error);
      return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 });
    }

    const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(path);
    return NextResponse.json({ url: data.publicUrl });
  } catch (err) {
    console.error("Upload route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
