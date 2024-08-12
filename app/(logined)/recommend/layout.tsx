import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";
import { ReactNode } from "react";

export default function loginedLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
