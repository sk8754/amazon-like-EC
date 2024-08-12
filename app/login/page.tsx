import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <div>
      <form className="flex flex-col px-[5%] sm:px-0 lg:w-[400px] mx-auto mt-24">
        <h2 className="text-2xl font-bold">ログインページ</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          className="border-2 border-[#7a7676]"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          className="border-2 border-[#7a7676]"
          required
        />
        <button
          formAction={login}
          className=" bg-[#3f3ff1] text-[white] w-[40%] mx-auto py-2 rounded-[1.5rem] mt-4"
        >
          ログイン
        </button>
      </form>
      <div className="px-[5%] sm:px-0 lg:w-[400px] mx-auto text-center">
        <button className=" bg-[#26d426] text-[white] w-[40%] mx-auto py-2 rounded-[1.5rem] mt-4">
          <Link href={"/resister"}>登録</Link>
        </button>
      </div>
    </div>
  );
}
