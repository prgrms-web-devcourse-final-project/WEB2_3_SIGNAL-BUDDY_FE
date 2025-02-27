"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/imgs/Logo.png";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PasswordInput } from "../password-input";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "비밀번호를 최소 8자 이상 입력해주세요." })
      .max(50, { message: "최대 50자까지 입력 가능합니다." }),
    checkPassword: z.string(),
  })
  .refine((data) => data.password === data.checkPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["checkPassword"],
  });

export function ResetPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      checkPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("비밀번호 재설정:", values);
    // 비밀번호 재설정 로직 추가
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[362px] md:bg-white"
      >
        <div className="flex flex-col">
          <Image src={logo} alt="Signal Buddy 로고" width={206} height={38} />
          <p className="text-sm mt-4 text-gray-500">
            새로운 비밀번호를 재설정하세요.
          </p>
        </div>
        <div className="flex flex-col mt-[32px]">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-gray-500">
                  비밀번호
                </FormLabel>
                <FormControl>
                  <PasswordInput field={field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="checkPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-gray-500">
                  비밀번호 확인
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    field={field}
                    placeholder="다시 한번 비밀번호를 입력해 주세요."
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-teal text-white text-sm h-10 mt-[148px] rounded-md mb-2"
          >
            재설정
          </Button>
        </div>
      </form>
    </Form>
  );
}
