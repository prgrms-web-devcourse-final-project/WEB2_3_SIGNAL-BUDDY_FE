import Navbar from "@/src/components/common/nav/Navbar";
import Footer from "@/src/components/common/footer/Footer";
import Test from "@/src/components/common/Test";

type Props = {
  children: React.ReactNode;
};
export default function UserRootLayout({ children }: Props) {
  return (
    <>
      <header
        role="banner"
        aria-label="주요 네비게이션"
        className="mx-4 md:mx-[30px]"
      >
        <Navbar />
        <Test />
      </header>
      <main
        className="mx-4 flex flex-grow flex-col md:mx-[30px]"
        aria-labelledby="main-content"
      >
        {children}
      </main>
      <footer role="contentinfo" aria-label="사이트 하단 정보">
        <Footer />
      </footer>
    </>
  );
}
