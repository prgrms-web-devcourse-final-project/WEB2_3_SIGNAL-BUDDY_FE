import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { AuthSideImage } from "@/src/components/auth-side-image/auth-side-image";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[1240px]  ">
      <div className={cn("flex flex-col gap-6 md:bg-white md:max-h-[770px]")}>
      <Card className="overflow-hidden border-none shadow-none">
        <CardContent className="h-[770px] grid p-0 md:grid-cols-2">
          <div className="flex items-center justify-center">
      {children}
      </div>
          <AuthSideImage />
        </CardContent>
      </Card>
    </div>
      </div>
    </div>
  );
}