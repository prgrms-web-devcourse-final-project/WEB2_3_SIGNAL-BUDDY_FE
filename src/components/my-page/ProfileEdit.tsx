"use client";
import { CameraIcon, UserIcon } from "@/src/components/utils/icons";
import { User } from "next-auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import Profile from "../common/profile/Profile";

const formSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: "닉네임을 입력해주세요." })
    .max(10, { message: "닉네임은 최대 10자까지 가능합니다." }),
  password: z
    .string()
    .min(8, { message: "비밀번호를 최소 8자 이상 입력해주세요." })
    .max(50, { message: "최대 50자까지 입력 가능합니다." }),
});

type Props = {
  user: User;
};

export default function ProfileEdit({ user }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [proflieFile, setProfileFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: user.nickname || "",
      password: "",
    },
  });

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files[0]) return;
    const file = files[0];
    setProfileFile(file);
  };

  return (
    <>
      <section className="flex justify-center">
        <label className="relative aspect-square w-[100px] cursor-pointer">
          <Profile size="3xl" />
          <label className="hover:bg-grey-300 outline-grey-300 absolute bottom-0 right-0 flex aspect-square w-[26px] cursor-pointer items-center justify-center rounded-full bg-white outline outline-1">
            <CameraIcon className="aspect-square w-[18px]" />
          </label>
          <input type="file" className="hidden" />
        </label>
      </section>
      <section>
        <form action="" className="flex flex-col gap-2">
          <div className="mb-2 flex flex-col gap-2">
            <p className="text-grey-500 text-xs font-medium">닉네임</p>
            <input
              type="text"
              className="outline-grey-300 h-12 w-full rounded-sm px-4 text-sm outline outline-1"
              placeholder="닉네임을 입력해주세요."
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-grey-500 text-xs font-medium">새 비밀번호</p>
            <input
              type="text"
              className="outline-grey-300 h-12 w-full rounded-sm px-4 text-sm outline outline-1"
              placeholder="새 비밀번호를 입력해주세요."
            />
          </div>
          <button className="mt-10 h-10 rounded-[6px] bg-teal text-sm font-medium text-white">
            저장
          </button>
        </form>
      </section>
    </>
  );
}
