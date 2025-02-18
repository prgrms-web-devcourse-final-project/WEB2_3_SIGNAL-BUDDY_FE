import React from "react";
import Image from "next/image";
import logo from "@/public/imgs/Logo Symbol.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-[70px] justify-center" aria-label="Main Navigation">
      <div className="mx-4 flex w-[1240px] items-center justify-between">
        {/* 로고 영역 */}
        <div>
          <Link href="/" aria-label="Homepage">
            <Image src={logo} alt="Signal Buddy 로고" width={85} height={31} />
          </Link>
        </div>

        {/* 내비게이션 메뉴 */}
        <div className="flex items-center gap-5 font-semibold">
          <Link href="/map" className="hover:underline">
            지도
          </Link>
          <Link href="/feedback" className="hover:underline">
            피드백
          </Link>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}
