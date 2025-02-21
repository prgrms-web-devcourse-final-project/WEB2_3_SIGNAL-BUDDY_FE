import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/src/components/admin/ui/app-sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    // <div className="flex h-[100vh] w-[100vw] bg-gray-300">
    //   {/* 좌측 메뉴 영역 */}
    //   <nav className="h-full w-[66px] bg-red"></nav>

    //   {/* 우측 영역 */}
    //   <div className="flex flex-grow flex-col">
    //     {/* 상단 툴바 영역 */}
    //     <div className="h-[73px] w-full bg-teal">dwa</div>
    //     {/* 본문 영역 */}
    //     <div className="mx-[20px] my-[22.5px] h-full rounded-[20px] bg-gray-100">
    //       {children}
    //     </div>
    //   </div>
    // </div>
  );
}
