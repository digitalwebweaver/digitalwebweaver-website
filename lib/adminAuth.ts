import { cookies } from "next/headers";

export async function isAdminAuthed() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  return !!session && session === process.env.ADMIN_PASSWORD;
}
