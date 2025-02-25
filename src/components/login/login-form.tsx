"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import logo from "@/public/imgs/Logo.png";
import Link from "next/link";
import { signIn } from "@/src/auth";
import { SocialLogin } from "./social-login";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/", // 로그인 후 이동
    });
    if (result?.error) {
      alert(result.error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[360px] md:bg-white"
      >
        <div className="flex flex-col ">
          <Image src={logo} alt="Signal Buddy 로고" width={206} height={38} />
          <p className="text-sm mt-4 text-gray-500">
            네이버, 카카오, 구글 통합 회원으로 로그인이 가능합니다.
          </p>
        </div>
        <div className="grid mt-8">
          <Label htmlFor="email" className="text-xs text-gray-500 ">
            이메일
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력해 주세요."
            className="h-12 pl-3 placeholder:text-gray-400 placeholder:text-sm mt-2 rounded-lg border border-gray-300 "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid mt-2">
          <Label htmlFor="password" className="text-xs text-gray-500 ">
            비밀번호
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            className="h-12 pl-3 placeholder:text-gray-400 placeholder:text-sm mt-2 rounded-lg border border-gray-300"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between mt-5">
            <div className=" flex space-x-2 items-center">
              <Checkbox
                id="rememberEmail"
                className="w-[22px] h-[22px] rounded-sm border-gray-300 bg-white"
              />

              <label
                htmlFor="rememberEmail"
                className="text-xs font-medium text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                이메일 기억하기
              </label>
            </div>
            <Link
              href="/reset-password"
              className="text-xs font-medium text-gray-500 ml-auto underline-offset-2 hover:underline"
            >
              비밀번호 재설정
            </Link>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-teal text-white text-sm h-10 mt-6 rounded-md"
        >
          로그인
        </Button>
        <div className="text-center text-xs mt-4">
          <Link href="/join" className="font-medium text-gray-500">
            회원가입
          </Link>
        </div>
      </form>
      <SocialLogin />
    </div>
  );
}
