import React from "react";
import logo from "@/public/imgs/Logo Symbol.png";

import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex h-[70px] justify-center">
      <div className="mx-4 flex w-[1240px] items-center justify-between">
        <div>
          <Image src={logo} alt="로고이미지 입니다." width={85} height={31} />
        </div>

        <div className="flex items-center gap-5 font-semibold">
          <p>지도</p>
          <p>피드백</p>
          <p>로그인</p>
        </div>
      </div>
    </div>
  );
}
