import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script src="https://code.jquery.com/jquery-3.2.1.min.js" />
        <Script
          src="https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=1bxEMLzGUg68a4EeRA5F14J5Vbgh6GWI3zLXabl9"
          strategy="beforeInteractive"
        />
        <Script
          src="https://topopentile1.tmap.co.kr/scriptSDKV2/tmapjs2.min.js?version=20231206"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className="bg-grey-100 flex min-h-screen flex-col font-Pretendard antialiased"
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
