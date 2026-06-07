import { supabaseAdmin } from "@/lib/supabase";
import { isAdminAuthed } from "@/lib/adminAuth";
import LoginForm from "../LoginForm";
import BlogManager from "./BlogManager";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  if (!(await isAdminAuthed())) {
    return <LoginForm />;
  }

  const { data: posts } = await supabaseAdmin
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  return <BlogManager posts={posts ?? []} />;
}
