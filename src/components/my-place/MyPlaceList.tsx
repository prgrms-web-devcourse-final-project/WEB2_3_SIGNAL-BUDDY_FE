import MyPlaceItem from "./MyPlaceItem";
import { Bookmark } from "@/src/types/my-place";

interface MyPlaceListProps {
  searchResults: Bookmark[];
}

export default function MyPlaceList({ searchResults }: MyPlaceListProps) {
  return (
    <div className="flex-1 flex flex-col space-y-2">
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
          <MyPlaceItem
            key={item.bookmarkId}
            name={item.name}
            address={item.address}
            lat={item.lat}
            lng={item.lng}
          />
        ))
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center text-gray-500">즐겨찾기를 추가해 주세요.</p>
        </div>
      )}
    </div>
  );
}
