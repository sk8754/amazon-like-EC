import React from "react";
import { signup } from "./actions";

const Page = () => {
  return (
    <main>
      <form
        action={signup}
        className="max-w-[800px] mx-auto text-center h-[500px] bg-[#a37d7d]"
      >
        <div className="flex flex-col w-[50%] h-[100%] mx-auto justify-center gap-4">
          <input type="text" name="name" placeholder="名前" />
          <input type="email" name="email" placeholder="メールアドレス" />
          <input type="password" name="password" placeholder="パスワード" />

          <button
            type="submit"
            className="bg-[#2525ef] w-[50%] mx-auto text-[white]"
          >
            登録
          </button>
        </div>
      </form>
    </main>
  );
};

export default Page;
