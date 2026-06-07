import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { isAdminAuthed } from "@/lib/adminAuth";
import { slugify, estimateReadMinutes } from "@/lib/slug";

export async function POST(req: Request) {
  if (!(await isAdminAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const title = (body.title || "").trim();
    if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

    const slug = slugify(body.slug || title);
    if (!slug) return NextResponse.json({ error: "A valid slug is required" }, { status: 400 });

    const status = body.status === "published" ? "published" : "draft";
    const content = body.content || "";

    const { data, error } = await supabaseAdmin
      .from("posts")
      .insert({
        slug,
        title,
        excerpt: body.excerpt || null,
        content,
        cover_image: body.coverImage || null,
        tag: body.tag || null,
        author_name: body.authorName || null,
        author_initials: body.authorInitials || null,
        read_minutes: estimateReadMinutes(content),
        status,
        seo_title: body.seoTitle || null,
        seo_description: body.seoDescription || null,
        published_at: status === "published" ? new Date().toISOString() : null,
      })
      .select("*")
      .single();

    if (error) {
      if (error.code === "23505") return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
      console.error("Post create error:", error);
      return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }

    return NextResponse.json({ post: data });
  } catch (err) {
    console.error("Post create error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  if (!(await isAdminAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const id = body.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const title = (body.title || "").trim();
    if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

    const slug = slugify(body.slug || title);
    if (!slug) return NextResponse.json({ error: "A valid slug is required" }, { status: 400 });

    const status = body.status === "published" ? "published" : "draft";
    const content = body.content || "";

    const { data: existing } = await supabaseAdmin.from("posts").select("status, published_at").eq("id", id).maybeSingle();

    const publishedAt =
      status === "published" ? existing?.published_at || new Date().toISOString() : null;

    const { data, error } = await supabaseAdmin
      .from("posts")
      .update({
        slug,
        title,
        excerpt: body.excerpt || null,
        content,
        cover_image: body.coverImage || null,
        tag: body.tag || null,
        author_name: body.authorName || null,
        author_initials: body.authorInitials || null,
        read_minutes: estimateReadMinutes(content),
        status,
        seo_title: body.seoTitle || null,
        seo_description: body.seoDescription || null,
        published_at: publishedAt,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      if (error.code === "23505") return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
      console.error("Post update error:", error);
      return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
    }

    return NextResponse.json({ post: data });
  } catch (err) {
    console.error("Post update error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!(await isAdminAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const { error } = await supabaseAdmin.from("posts").delete().eq("id", id);
    if (error) return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
