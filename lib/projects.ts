import { supabaseAdmin } from "@/lib/supabase";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tag: string | null;
  category: string | null;
  excerpt: string | null;
  content: string;
  icon: string;
  color: string;
  metrics: ProjectMetric[];
  stack: string[];
  cover_image: string | null;
  client_name: string | null;
  client_country: string | null;
  status: string;
  featured: boolean;
  sort_order: number;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export async function getPublishedProjects(limit = 200): Promise<Project[]> {
  const { data } = await supabaseAdmin
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("published_at", { ascending: false })
    .limit(limit);
  return (data as Project[]) ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data } = await supabaseAdmin
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  return (data as Project) ?? null;
}
