"use server";

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

// 検索フォームで送られてきたテキストの処理
export const searchFormAction = async (formData: FormData) => {
  const inputText = formData.get("search");

  // データベースから取得するデータの条件を指定
  const validate = {};

  const searchItem = async () => {
    try {
      const { data } = await supabase
        .from("items")
        .select("*")
        .eq("name", validate);
    } catch (err) {
      console.error(err);
    }
  };
};
