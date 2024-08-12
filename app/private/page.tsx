import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// ログイン中のユーザのみ表示されるページ
export default async function privatePage() {
  const supabase = createClient();
  const { error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);

    redirect("/error");
  } else {
    return <p className="mt-[5rem]">ログイン中です</p>;
  }
}
