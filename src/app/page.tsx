import Image from "next/image";
import logo from "@/public/imgs/Logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex-grow-1 flex w-full justify-center rounded-[20px] bg-slate-300 py-[203px] lg:pb-[359px] lg:pt-[311px]">
      <div className="flex flex-col items-center px-[60px] sm:px-8 md:px-16">
        <div className="w-full max-w-[250px] sm:max-w-[390px] lg:max-w-[600px]">
          <Image
            src={logo}
            alt="Signal Buddy 로고"
            width={390}
            height={70}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <h2 className="font-Overpass mt-4 text-[20px] font-bold text-gray-700 sm:mt-2 sm:text-[40px] md:text-[50px]">
          A Walking Partner for All
        </h2>
        <p className="mt-[17px] w-full text-center text-gray-600 sm:mt-[14px] sm:text-left lg:w-[775px] lg:text-xl">
          <strong>“모두를 위한 보행 파트너”</strong>는 누구나 안전하고 편리하게
          이동할 수 있도록 돕는 서비스입니다. 보행 데이터를 분석해 맞춤형 경로를
          제공하며, 이동의 즐거움을 더하는 스마트한 기능을 제공합니다.
        </p>
        <Link href="/map" passHref>
          <button className="mx-auto mt-10 h-[40px] w-[200px] rounded-lg bg-black font-bold text-white sm:mx-0 sm:h-[50px] sm:text-xl">
            지도로 바로가기
          </button>
        </Link>
      </div>
    </section>
  );
}
