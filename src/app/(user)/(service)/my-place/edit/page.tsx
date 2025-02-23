import Link from "next/link";
import MyPlaceListEdit from "@/src/components/my-place/MyPlaceListEdit";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-center">
        <div className="border-grey-300 flex h-10 w-full items-center justify-between border-b text-sm font-extrabold mb-5 md:mb-2">
          <div className="flex">
            <p className="text-grey-700">{`홈 > 나의 목적지`}</p>
          </div>
          <Link href={`/my-place`}>
            완료
          </Link>
        </div>
        <div className="  flex min-h-[917px] w-full">
          <section className="flex flex-grow flex-col gap-2 ">
            <MyPlaceListEdit />
          </section>
        </div>
      </div>
    </div>
  );
}