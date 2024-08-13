import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
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

  const saleItems = itemData?.filter((filterd) => filterd["price"] <= 1000); // 修正: 価格が1000以下の要素を取得

  return (
    <div className="mt-[6rem] grid grid-cols-2 sm:grid-cols-4">
      {saleItems?.map((item) => (
        <div key={item.id}>
          <Image src={`${item.img_path}`} alt="" />
          <h2>{item.name}</h2>
          <p>{item.content}</p>
          <p className="text-[#f52e2e] font-bold">{item.price}円</p>

          <Link
            href={`/items/${item.id}`}
            className="bg-[#31e109] rounded-[1rem]"
          >
            商品詳細
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
