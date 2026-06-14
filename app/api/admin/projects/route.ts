import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { isAdminAuthed } from "@/lib/adminAuth";
import { slugify } from "@/lib/slug";

interface MetricInput {
  value?: unknown;
  label?: unknown;
}

// Normalize the metrics array: keep only {value,label} with content, cap at 3
// (the card design shows exactly three).
function cleanMetrics(input: unknown): { value: string; label: string }[] {
  if (!Array.isArray(input)) return [];
  return input
    .map((m: MetricInput) => ({
      value: typeof m?.value === "string" ? m.value.trim() : "",
      label: typeof m?.label === "string" ? m.label.trim() : "",
    }))
    .filter((m) => m.value || m.label)
    .slice(0, 3);
}

function cleanStack(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  return input
    .map((s) => (typeof s === "string" ? s.trim() : ""))
    .filter(Boolean)
    .slice(0, 12);
}

// Build the row shared by create + update from the request body.
function buildRow(body: Record<string, unknown>, slug: string, status: string) {
  return {
    slug,
    title: String(body.title || "").trim(),
    tag: body.tag ? String(body.tag) : null,
    category: body.category ? String(body.category) : null,
    excerpt: body.excerpt ? String(body.excerpt) : null,
    content: body.content ? String(body.content) : "",
    icon: body.icon ? String(body.icon) : "default",
    color: body.color ? String(body.color) : "c1",
    metrics: cleanMetrics(body.metrics),
    stack: cleanStack(body.stack),
    cover_image: body.coverImage ? String(body.coverImage) : null,
    client_name: body.clientName ? String(body.clientName) : null,
    client_country: body.clientCountry ? String(body.clientCountry) : null,
    status,
    featured: !!body.featured,
    sort_order: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
    seo_title: body.seoTitle ? String(body.seoTitle) : null,
    seo_description: body.seoDescription ? String(body.seoDescription) : null,
  };
}

export async function POST(req: Request) {
  if (!(await isAdminAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const title = String(body.title || "").trim();
    if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

    const slug = slugify(body.slug || title);
    if (!slug) return NextResponse.json({ error: "A valid slug is required" }, { status: 400 });

    const status = body.status === "published" ? "published" : "draft";
    const row = buildRow(body, slug, status);

    const { data, error } = await supabaseAdmin
      .from("projects")
      .insert({
        ...row,
        published_at: status === "published" ? new Date().toISOString() : null,
      })
      .select("*")
      .single();

    if (error) {
      if (error.code === "23505") return NextResponse.json({ error: "A project with this slug already exists" }, { status: 409 });
      console.error("Project create error:", error);
      return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }

    return NextResponse.json({ project: data });
  } catch (err) {
    console.error("Project create error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  if (!(await isAdminAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const id = body.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const title = String(body.title || "").trim();
    if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

    const slug = slugify(body.slug || title);
    if (!slug) return NextResponse.json({ error: "A valid slug is required" }, { status: 400 });

    const status = body.status === "published" ? "published" : "draft";
    const row = buildRow(body, slug, status);

    const { data: existing } = await supabaseAdmin.from("projects").select("published_at").eq("id", id).maybeSingle();
    const publishedAt = status === "published" ? existing?.published_at || new Date().toISOString() : null;

    const { data, error } = await supabaseAdmin
      .from("projects")
      .update({
        ...row,
        published_at: publishedAt,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      if (error.code === "23505") return NextResponse.json({ error: "A project with this slug already exists" }, { status: 409 });
      console.error("Project update error:", error);
      return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
    }

    return NextResponse.json({ project: data });
  } catch (err) {
    console.error("Project update error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!(await isAdminAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const { error } = await supabaseAdmin.from("projects").delete().eq("id", id);
    if (error) return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
