import MyPlaceList from "@/src/components/my-place/MyPlaceList";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-center">
        <div className="border-grey-300 dark:border-grey-700 flex h-10 w-full items-center justify-between border-b text-sm font-extrabold mb-5 md:mb-2">
          <div className="flex">
            <p className="text-grey-700 dark:text-grey-300">{`홈 > 즐겨찾기`}</p>
          </div>
          <Link href={`/my-place/edit`}>편집</Link>
        </div>
        <div className="flex min-h-[917px] w-full">
          <section className="flex flex-grow flex-col gap-2 ">
            <MyPlaceList />
          </section>
        </div>
      </div>
    </div>
  );
}
