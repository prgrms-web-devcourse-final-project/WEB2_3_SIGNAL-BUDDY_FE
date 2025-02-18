import React from "react";
import logo from "@/public/imgs/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-[18px] flex h-[198px] justify-center pb-2"
      aria-labelledby="footer-heading"
    >
      <div
        className="flex h-[190px] w-[1240px] flex-col rounded-[20px] bg-white px-5 pt-5"
        role="contentinfo"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer Navigation
        </h2>

        <div className="flex h-[128px] justify-between border-b border-gray-300">
          {/* 로고 및 슬로건 */}
          <div className="flex flex-col gap-[14px] pt-[21px]">
            <Link href="/" className="hover:underline">
              <Image
                src={logo}
                alt="Signal Buddy 로고"
                width={197}
                height={34}
              />
            </Link>
            <p className="font-semibold text-gray-500">
              모두를 위한 보행 파트너
            </p>
          </div>

          {/* 네비게이션 섹션 */}
          <nav aria-label="Footer Main Menu" className="flex gap-4">
            <div className="w-[120px]">
              <h3 className="border-b border-gray-300 pb-2 text-[10px] text-gray-400">
                MENU
              </h3>
              <ul className="mt-2 flex flex-col gap-[11px] text-xs font-semibold text-gray-700">
                <li>
                  <Link href="/" className="hover:underline">
                    홈
                  </Link>
                </li>
                <li>
                  <Link href="/map" className="hover:underline">
                    지도
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:underline">
                    피드백
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[140px]">
              <h3 className="border-b border-gray-300 pb-2 text-[10px] text-gray-400">
                TERMS
              </h3>
              <ul className="mt-2 flex flex-col gap-[12px] text-xs font-semibold text-gray-500">
                <li>
                  <Link href="/privacy" className="hover:underline">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* 저작권 정보 */}
        <div className="flex justify-center pb-4 pt-3">
          <p className="text-xs text-gray-500">© 2025 all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
