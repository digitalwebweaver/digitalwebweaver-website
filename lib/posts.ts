import { supabaseAdmin } from "@/lib/supabase";

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  tag: string | null;
  author_name: string | null;
  author_initials: string | null;
  read_minutes: number;
  status: string;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export async function getPublishedPosts(limit = 100): Promise<Post[]> {
  const { data } = await supabaseAdmin
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(limit);
  return data ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data } = await supabaseAdmin
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  return data ?? null;
}

export function formatPostDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const GRADIENTS = ["bc-1", "bc-2", "bc-3", "bc-4", "bc-5", "bc-6"];
export function gradientClass(index: number) {
  return GRADIENTS[index % GRADIENTS.length];
}
