import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import logo from "@/public/imgs/Logo.png";
import { AuthSideImage } from "../auth-side-image/auth-side-image";

export function ResetPassword3({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border-none shadow-none">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8 md:bg-white">
            <div className="flex flex-col">
                <Image
                  src={logo}
                  alt="Signal Buddy 로고"
                  width={206}
                  height={38}
                />
                <p className="text-sm mt-4 text-gray-500">
                  새로운 비밀번호를 재설정하세요. 
                </p>
              </div>
              <div className="flex flex-col mt-[32px]">
                <div>
                <Label htmlFor="password" className="text-xs text-gray-500 ">
                  비밀번호
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  className="h-12 placeholder:text-gray-400 placeholder:text-sm mt-2 rounded-lg border border-gray-300"
                  required
                />
                </div>
              <div className="mt-2">
                <Label htmlFor="checkPassword" className="text-xs text-gray-500 ">
                  비밀번호 확인
                </Label>
                <Input
                  id="chackPassword"
                  type="password"
                  placeholder="다시 한번 비밀번호를 입력해 주세요."
                  className="h-12 placeholder:text-gray-400 placeholder:text-sm mt-2 rounded-lg border border-gray-300"
                  required
                />
                </div>
              <Button
                type="submit"
                className="w-full bg-teal text-white text-sm h-10 mt-[148px] rounded-md"
              >
                재설정
              </Button>
            </div>
          </form>
<AuthSideImage/>
        </CardContent>
      </Card>
    </div>
  );
}