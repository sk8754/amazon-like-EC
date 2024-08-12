import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";

const page = async () => {
  const supabase = createClient();

  const dataFetch = async () => {
    try {
      const { data } = await supabase.from("items").select("*");
      return data as {
        name: string;
        content: string;
        price: number;
        id: number;
        img_path: string;
      }[];
    } catch (err) {
      console.error(err);
    }
  };

  const itemData = await dataFetch();

  return (
    <div>
      <h2 className="font-bold text-3xl mt-[5rem] mb-[3rem]">
        おすすめ商品一覧
      </h2>

      <div className="max-w-[1200px] mx-auto mt-20 text-center grid grid-cols-2 sm:grid-cols-4 gap-4 mb-[4rem]">
        {itemData?.map((item) => (
          <div key={item.id}>
            <img src={item.img_path} className="aspect-video" alt="" />
            <h2>{item.name}</h2>
            <p>{item.content}</p>
            <div className="flex justify-center gap-8">
              <div className="bg-[#bcff8d] font-bold">
                <Link href={`/items/${item.id}`}>商品詳細</Link>
              </div>
              <p
                style={
                  item.price <= 1000 ? { color: "red" } : { color: "black" }
                }
                className="font-bold"
              >
                {item.price}円
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
