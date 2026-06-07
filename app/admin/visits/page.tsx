import { supabaseAdmin } from "@/lib/supabase";
import { isAdminAuthed } from "@/lib/adminAuth";
import LoginForm from "../LoginForm";
import VisitsView from "./VisitsView";

export const dynamic = "force-dynamic";

export default async function VisitsPage() {
  if (!(await isAdminAuthed())) {
    return <LoginForm />;
  }

  const since = new Date();
  since.setDate(since.getDate() - 90);

  const [{ data: visits }, { data: pageViews }] = await Promise.all([
    supabaseAdmin
      .from("visits")
      .select("*")
      .gte("created_at", since.toISOString())
      .order("created_at", { ascending: false })
      .limit(3000),
    supabaseAdmin
      .from("page_views")
      .select("*")
      .gte("viewed_at", since.toISOString())
      .order("viewed_at", { ascending: true })
      .limit(15000),
  ]);

  return <VisitsView visits={visits ?? []} pageViews={pageViews ?? []} />;
}
