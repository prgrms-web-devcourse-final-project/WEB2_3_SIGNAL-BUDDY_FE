import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main
        className="mx-4 flex flex-grow flex-col md:mx-[30px]"
        aria-labelledby="main-content"
      >
      <h1>SignalBuddy</h1>
      {children}
    </main>
  );
}