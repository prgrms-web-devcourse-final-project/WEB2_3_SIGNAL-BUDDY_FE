import Image from "next/image";
import deleteImage from "@/public/imgs/Delete.svg";
import twoLineHamburger from "@/public/imgs/two-line-hamburger.svg";

interface MyPlace {
  id: string;
  name: string;
  address: string;
}

const myPlaceData: MyPlace[] = [
  { 
    id: "1",
    name: "집",
    address: "경기 용인시 기흥구 기흥역로 63",
  },
  { 
    id: "2",
    name: "회사",
    address: "서울 강남구 테헤란로 427",
  },
];

function MyPlaceItem({
  name,
  address,
}: MyPlace) {

  return (
    <article>
      {/* 모바일 화면 */}
      <div className="flex items-center gap-2 md:hidden">
      <div className="bg-white rounded-full px-5 py-2 h-[58px] flex-1">
          <p className="text-base font-extrabold h-5 overflow-hidden">{name}</p>
          <p className="text-sm font-medium text-gray-500 h-4 mt-1 overflow-hidden">{address}</p>
        </div>
        <div className="bg-white w-[58px] h-[58px] rounded-full flex items-center justify-center">
          <div className="bg-gray-500 w-[50px] h-[50px] rounded-full "></div>
        </div>
      </div>

      {/* pc 화면 */}
      <div className="hidden md:flex items-center gap-2 p-5 bg-white rounded-lg h-[80px] w-full justify-between">
        <div className="flex">
          <div>
            <p className="text-base font-extrabold">{name}</p>
            <p className="text-sm font-medium text-gray-500  ">{address}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-white w-[58px] h-[58px] rounded-xl border border-gray-300 flex items-center justify-center">
            <div className="bg-gray-500 w-[50px] h-[50px] rounded-lg "></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MyPlaceList() {
  return (
    <>
      {myPlaceData.map((myPlace, index) => (
        <MyPlaceItem key={index} {...myPlace} />
      ))}
    </>
  );
}
