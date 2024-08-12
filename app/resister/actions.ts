"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    redirect("/error");
  }

  const userData = await supabase.from("user").insert({
    name: name,
    auth_id: data?.user?.id,
  });

  if (userData.error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
