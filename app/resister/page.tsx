import React from "react";
import { signup } from "./actions";

const Page = () => {
  return (
    <main>
      <form
        action={signup}
        className="max-w-[400px] mx-auto text-center h-[500px] "
      >
        <div className="px-[5%] sm:px-0 flex flex-col w-[full] h-[100%] mx-auto justify-center gap-4">
          <h2 className="font-bold text-2xl">登録ページ</h2>
          <input
            className="border-2"
            type="text"
            name="name"
            placeholder="名前"
          />
          <input
            className="border-2"
            type="email"
            name="email"
            placeholder="メールアドレス"
          />
          <input
            className="border-2"
            type="password"
            name="password"
            placeholder="パスワード"
          />

          <button
            type="submit"
            className="bg-[#2525ef] w-[50%] mx-auto text-[white] p-[0.5rem] rounded-[1rem]"
          >
            登録
          </button>
        </div>
      </form>
    </main>
  );
};

export default Page;
