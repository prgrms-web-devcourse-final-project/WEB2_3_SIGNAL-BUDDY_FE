

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
    <article className="flex items-center  gap-5">
        <div className="bg-white rounded-full pl-5 py-2 h-[58px] flex-1 min-w-[230px]">
            <p className="text-base font-extrabold">{name}</p>
            <p className="text-sm font-medium text-gray-500  ">{address}</p>
        </div>
        <div className="bg-white w-[58px] h-[58px] rounded-full flex items-center justify-center md:hidden">
            <div className="bg-gray-500 w-[50px] h-[50px] rounded-full "></div>
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
