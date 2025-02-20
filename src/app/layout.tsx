import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Signal Buddy | 모두를 위한 보행 파트너",
  description: "Signal Buddy | 모두를 위한 보행 파트너",
  icons: {
    icon: "/icon-192x192-rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="bg-grey-100 flex min-h-screen flex-col font-Pretendard antialiased"
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
