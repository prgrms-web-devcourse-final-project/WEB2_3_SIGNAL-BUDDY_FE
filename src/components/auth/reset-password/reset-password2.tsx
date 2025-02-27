"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import logo from "@/public/imgs/Logo.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useState } from "react";
import { EmailForm } from "./email-form";
import { OTPForm } from "./OTP-form";

export function ResetPassword2() {
  const [otp, setOtp] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const isOtpComplete = otp.length === 6;

  const handleSendEmail = (email: string) => {
    console.log("이메일 제출:", email);
    setIsEmailSent(true);
  };

  const handleOtpSubmit = (enteredOtp: string) => {
    console.log("OTP 제출:", enteredOtp);
    // OTP 인증 로직 추가
  };

  return (
    <div className="w-full max-w-[362px] md:bg-white">
      <div className="flex flex-col">
        <Image src={logo} alt="Signal Buddy 로고" width={206} height={38} />
        <p className="text-sm mt-4 text-gray-500">
          이메일을 인증하고 비밀번호를 재설정하세요.
        </p>
      </div>
      <div className="flex flex-col mt-[32px]">
        <EmailForm onEmailSend={handleSendEmail} isEmailSent={isEmailSent} />
        {isEmailSent && (
          <OTPForm
            isOtpComplete={isOtpComplete}
            setOtpValue={setOtp}
            onSubmitOtp={handleOtpSubmit}
          />
        )}
        <Button
          type="button"
          className={`w-full  text-white text-sm h-10 mt-[148px] rounded-md mb-2 ${
            isOtpComplete ? "bg-teal" : "bg-gray-400"
          } ${isEmailSent ? "mt-[148px]" : "mt-[226px]"}`}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
