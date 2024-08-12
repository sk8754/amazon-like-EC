import photo1 from "@/public/imgs/お中元.jpg";
import photo2 from "@/public/imgs/厳選ウナギ.jpg";
import photo3 from "@/public/imgs/無題.png";
import photo4 from "@/public/imgs/White Black Colorful Simple Donut Promotion Banner.png";

import logo from "@/public/imgs/logo.svg";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function Toppage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  if (error) {
    console.error(error);
  }

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
      console.log(err);
    }
  };

  const itemData = await dataFetch();

  const filterData = itemData?.filter((filter) => filter["id"] <= 4);

  const saleData = itemData?.filter((filtered) => filtered["price"] <= 1000);

  return (
    <div>
      <Header />
      <div className="h-[47vh] lg:h-screen sm:mb-[2rem]">
        <div className="slide-show pt-[4rem] sm:pt-0 ">
          <ul className="relative">
            <li>
              <Image
                src={photo1}
                className="w-full aspect-[16/9] xl:w-[85%]  xl:mx-auto "
                alt="キャンペーン画像"
              />
            </li>

            <li>
              <Image
                src={photo2}
                className="w-full xl:w-[85%]  xl:mx-auto aspect-[16/9]"
                alt="厳選ウナギ"
              />
            </li>
            <li>
              <Image
                src={photo3}
                className="w-full xl:w-[85%]  xl:mx-auto aspect-[16/9]"
                alt="セール情報"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">人気カテゴリ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="#"
              className="bg-white rounded-md shadow-sm p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors"
              prefetch={false}
            >
              <BookIcon className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">本</span>
            </Link>
            <Link
              href="#"
              className="bg-white rounded-md shadow-sm p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors"
              prefetch={false}
            >
              <TvIcon className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">家電</span>
            </Link>
            <Link
              href="#"
              className="bg-white rounded-md shadow-sm p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors"
              prefetch={false}
            >
              <ShirtIcon className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">ファッション</span>
            </Link>
            <Link
              href="#"
              className="bg-white rounded-md shadow-sm p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors"
              prefetch={false}
            >
              <TruckIcon className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">家具・インテリア</span>
            </Link>
          </div>
        </section>
        {/* おススメ商商品 */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">おすすめ商品</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filterData?.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md shadow-sm p-4 relative"
              >
                <img
                  src={item.img_path}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-md mb-2 w-full aspect-square"
                />
                <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                <p className="text-gray-500 mb-4">{item.content}</p>
                <div className="flex items-center justify-between absolute bottom-0 w-full">
                  <span
                    style={
                      item.price <= 1000 ? { color: "red" } : { color: "black" }
                    }
                    className="text-primary font-bold"
                  >
                    {item.price}円
                  </span>
                  <button className="bg-[#07cd07] text-[white] translate-x-[-28px]">
                    <Link href={`/items/${item.id}`}>商品詳細</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-[3rem] mb-[5rem]">
            <Link
              href="/recommend"
              className="bg-[#f23636] text-[white] p-4 rounded-[1rem]"
            >
              おすすめ商品一覧
            </Link>
          </div>
        </section>

        {/* セール商品 */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">セール情報</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {saleData?.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md shadow-sm p-4 relative"
              >
                <img
                  src={item.img_path}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-md mb-2 w-full aspect-square"
                />
                <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                <p className="text-gray-500 mb-4">{item.content}</p>
                <div className="flex items-center justify-between absolute bottom-0 w-full">
                  <span className="text-[#f22d2d] font-bold">
                    {item.price}円
                  </span>
                  <button className="bg-[#07cd07] text-[white] translate-x-[-28px] ">
                    <Link href={`/items/${item.id}`}>商品詳細</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center my-[3rem] ">
            <Link
              href="/sale"
              className="bg-[#1999e8] text-[white] p-4 rounded-[1rem]"
            >
              セール商品一覧
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ShirtIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function TvIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
