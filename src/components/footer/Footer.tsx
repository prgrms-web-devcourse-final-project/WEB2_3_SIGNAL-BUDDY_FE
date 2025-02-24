import React from "react";
import logo from "@/public/imgs/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mb-2 mt-[60px] flex justify-center pb-2 sm:mx-0"
      aria-labelledby="footer-heading"
    >
      <div
        className="flex h-[117px] w-full max-w-[calc(100vw-32px)] flex-col rounded-[20px] bg-white px-6 sm:h-[190px] sm:px-5 sm:pt-5 md:max-w-[calc(100vw-60px)]"
        role="contentinfo"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer Navigation
        </h2>

        <div className="sm:border-grey-300 flex h-[128px] justify-between sm:border-b">
          {/* 로고 및 슬로건 */}
          <div className="mb-3 flex w-full flex-col items-center gap-[14px] pt-[21px] sm:mb-0 sm:items-start">
            <Link
              href="/"
              className="w-full max-w-[106px] hover:underline sm:max-w-[197px]"
            >
              <Image
                src={logo}
                alt="Signal Buddy 로고"
                width={197}
                height={34}
                layout="responsive"
                objectFit="contain"
              />
            </Link>
            <p className="text-grey-500 hidden font-semibold sm:flex">
              모두를 위한 보행 파트너
            </p>
          </div>

          {/* 네비게이션 섹션 */}
          <nav aria-label="Footer Main Menu" className="hidden gap-4 sm:flex">
            <div className="w-[120px]">
              <h3 className="border-grey-300 text-grey-400 border-b pb-2 text-[10px]">
                MENU
              </h3>
              <ul className="text-grey-500 mt-2 flex flex-col gap-[11px] text-xs font-semibold">
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
              <h3 className="border-grey-300 text-grey-400 border-b pb-2 text-[10px]">
                TERMS
              </h3>
              <ul className="text-grey-500 mt-2 flex flex-col gap-[12px] text-xs font-semibold">
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
                <li>
                  <Link href="/admin" className="hover:underline">
                    관리자 페이지
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <nav className="text-grey-500 mb-[11px] flex justify-between text-xs font-semibold sm:mb-0 sm:hidden">
          <ul className="flex gap-5">
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/map">지도</Link>
            </li>
            <li>
              <Link href="/feedback">피드백</Link>
            </li>
          </ul>
          <ul className="flex gap-5">
            <li>
              <Link href="/">개인정보 처리 방침</Link>
            </li>
            <li>
              <Link href="/">이용약관</Link>
            </li>
          </ul>
        </nav>

        {/* 저작권 정보 */}
        <div className="flex justify-center pb-4 pt-3">
          <p className="text-grey-500 text-xs">© 2025 all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
