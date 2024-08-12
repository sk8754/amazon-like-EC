"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useDataContext } from "@/context/CartContext";

const Page = ({ params }: { params: { id: string } }) => {
  const supabase = createClient();

  const [fetchItemData, setFetchItemData] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const { data, setData } = useDataContext();
  const getItemData = async () => {
    try {
      const { data } = await supabase
        .from("items")
        .select("*")
        .eq("id", params.id)
        .single();

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const itemData = await getItemData();
      setFetchItemData(itemData);
    };
    fetchData();
  }, [params.id]);

  // カートに追加する処理
  const handleAddToCart = () => {
    setShowModal(true); // モーダルを表示
    setData([
      ...data,
      {
        id: fetchItemData?.id,
        name: fetchItemData?.name,
        price: fetchItemData?.price,
        img_path: fetchItemData?.img_path,
      },
    ]);
  };

  // モーダルの閉じる処理
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-16 px-[5%] sm:px-0">
      <h1 className="text-4xl mb-[3rem]">{fetchItemData?.name}の商品詳細</h1>
      <div className="w-full sm:max-w-[600px] mx-auto">
        <img src={fetchItemData?.img_path} alt="" />
        <h2 className=" font-bold text-3xl">{fetchItemData?.name}</h2>
        <ul>
          <li
            style={
              fetchItemData?.price <= 1000
                ? { color: "red" }
                : { color: "black" }
            }
          >
            {fetchItemData?.price}円
          </li>
          <li>{fetchItemData?.content}</li>
        </ul>

        <button
          className="bg-[#49d503] rounded-[1rem] p-[1rem] mb-[2rem]"
          onClick={handleAddToCart}
        >
          カートに入れる
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>カートに追加されました。</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
