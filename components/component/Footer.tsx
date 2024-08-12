"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#111827] text-[white]">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:text-center">
            <div>
              <h3 className="text-lg font-bold mb-4">会社情報</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    採用情報
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    プレスリリース
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">サポート</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    ヘルプ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    配送・返品
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">ソーシャルメディア</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; 2024 sk8754mart All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
