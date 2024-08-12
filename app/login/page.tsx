import { login } from "./actions";

export default function LoginPage() {
  return (
    <form className="flex flex-col lg:w-[400px] mx-auto mt-24 ">
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
  );
}
