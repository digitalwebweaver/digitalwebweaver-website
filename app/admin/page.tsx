import { supabaseAdmin } from "@/lib/supabase";
import { isAdminAuthed } from "@/lib/adminAuth";
import LoginForm from "./LoginForm";
import InquiriesTable from "./InquiriesTable";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminAuthed())) {
    return <LoginForm />;
  }

  const [{ data: inquiries }, { data: replies }] = await Promise.all([
    supabaseAdmin.from("inquiries").select("*").order("created_at", { ascending: false }).limit(500),
    supabaseAdmin.from("replies").select("*").order("created_at", { ascending: true }).limit(2000),
  ]);

  return <InquiriesTable inquiries={inquiries ?? []} replies={replies ?? []} />;
}
