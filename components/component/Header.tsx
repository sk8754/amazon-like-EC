"use client";
import Link from "next/link";
import React, { FormEventHandler, useEffect, useState } from "react";
import logo from "@/public/imgs/logo.svg";
import logo2 from "@/public/imgs/logo2.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { searchFormAction } from "@/app/actions";

const Header = () => {
  const supabase = createClient();
  const router = useRouter();

  // ログインユーザーを取得する
  const getUser = async () => {
    try {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };
  getUser();

  // ログアウトの処理
  const signout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      router.push("/login");
    }
  };

  return (
    <div>
      <header className="bg-[#1b263e] w-full  text-[white] border-b shadow-sm fixed top-0 z-10 h-16 ">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
          <div className="flex items-center gap-4 lg:ml-[2rem]">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Image
                src={logo}
                alt="Amazon"
                width={90}
                height={24}
                className="sm:aspect-square"
              />
            </Link>
            <form
              action={searchFormAction}
              className="relative mr-[1rem] sm:mr-[0] flex-1 max-w-md flex "
            >
              {/* 検索フォーム */}
              <input
                type="search"
                name="search"
                placeholder="商品を検索"
                id="serch"
                className="w-full text-[#2d2c2c] rounded-md bg-gray-100 px-4 py-1 sm:py-2  sm:px-12"
              />
            </form>
          </div>

          <div className="flex items-center gap-4 md:flex md:items-center md:gap-4 order-3 lg:mr-[3rem]">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-primary transition-colors">
                <UserIcon className="w-6 h-6" />
                <span className="hidden md:inline">マイページ</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#c7c7c7]" align="end">
                <DropdownMenuItem>
                  <Link href="#" className="text-[black]" prefetch={false}>
                    プロフィール
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="text-[black]" prefetch={false}>
                    注文履歴
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="text-[black]" prefetch={false}>
                    お気に入り
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="text-[black]" prefetch={false}>
                    設定
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <Link href="#" className="text-[black]" prefetch={false}>
                      ログアウト
                    </Link> */}
                  <button onClick={signout}>ログアウト</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/cart"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="hidden md:inline">カート</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
