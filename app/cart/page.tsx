"use client";
import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";
import { useDataContext } from "@/context/CartContext";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type Items = {
  id: number;
  name: string;
  price: number;
  img_path: string;
};
const Page = () => {
  const supabase = createClient();

  const { data, setData } = useDataContext();

  const itemId = data.map((data) => {
    return data.id;
  });

  // カート情報のidパラメーターとデータベースのidカラムが一致するものを取得する
  const getItems = async () => {
    try {
      const { data: item } = await supabase
        .from("items")
        .select("*")
        .in("id", itemId);

      return item;
    } catch (err) {
      console.error(err);
    }
  };

  const [items, setItems] = useState<Items[]>([]);

  console.log(items);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      setItems(fetchedItems || []);
    };
    fetchItems();
  }, [data]);

  // 合計金額の計算
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += Number(data[i].price);
  }

  return (
    <div>
      <Header />
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-bold text-3xl mt-[5rem]">カートの商品</h2>
      </div>

      {items?.map((item) => (
        <div
          className="mt-[5rem] max-w-[900px] mx-auto flex justify-center "
          key={item.id}
        >
          <div>
            <img src={item.img_path} className="w-full sm:max-w-[600px]" />
            <h2 className="font-bold text-2xl">{item.name}</h2>
            <p>単価: {item.price}円</p>
            <p>{}個</p>
          </div>
        </div>
      ))}
      <div className="mt-[5rem] mb-[3rem] max-w-[900px] mx-auto text-center">
        <p className="font-bold text-3xl">合計金額 {total}円</p>

        <button className="mt-[1rem] p-[1rem] bg-[#04cb04] rounded-[1rem]">
          <Link className="font-bold text-3xl" href={"/order"}>
            注文ページ
          </Link>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
