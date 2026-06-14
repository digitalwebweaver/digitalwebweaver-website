import { supabaseAdmin } from "@/lib/supabase";
import { isAdminAuthed } from "@/lib/adminAuth";
import LoginForm from "../LoginForm";
import PortfolioManager from "./PortfolioManager";
import type { Project } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function AdminPortfolioPage() {
  if (!(await isAdminAuthed())) {
    return <LoginForm />;
  }

  const { data: projects } = await supabaseAdmin
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  return <PortfolioManager projects={(projects as Project[]) ?? []} />;
}
