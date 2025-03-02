"use client";

import Image from "next/image";
import deleteImage from "@/public/imgs/Delete.svg";
import twoLineHamburger from "@/public/imgs/two-line-hamburger.svg";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";
import { useSession } from "next-auth/react";
import client from "@/src/lib/api/client";

interface Bookmark {
  bookmarkId: number;
  lat: number;
  lng: number;
  address: string;
  name: string;
  sequence: number;
}

interface MyPlaceItemProps extends Bookmark {
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  onDelete?: () => void;
}

function MyPlaceItem({
  bookmarkId,
  name,
  address,
  dragHandleProps,
  onDelete,
}: MyPlaceItemProps) {
  return (
    <article>
      {/* 모바일 화면 */}
      <div className="flex items-center gap-2 md:hidden">
        <div onClick={onDelete}>
          <Image src={deleteImage} alt="삭제" />
        </div>
        <div className="bg-white rounded-full px-5 py-2 h-[58px] flex-1">
          <p className="text-base font-extrabold h-5 overflow-hidden">{name}</p>
          <p className="text-sm font-medium text-gray-500 h-4 mt-1 overflow-hidden">
            {address}
          </p>
        </div>
        <div className="bg-white w-[58px] h-[58px] rounded-full flex items-center justify-center">
          <div className="bg-gray-500 w-[50px] h-[50px] rounded-full"></div>
        </div>
        <div className="ml-1" {...(dragHandleProps || {})}>
          <Image src={twoLineHamburger} alt="순서 바꾸기 아이콘" />
        </div>
      </div>

      {/* pc 화면 */}
      <div className="hidden md:flex items-center gap-2 p-5 bg-white rounded-lg h-[80px] w-full justify-between">
        <div className="flex">
          <div className="flex items-center pr-4" onClick={onDelete}>
            <Image src={deleteImage} alt="삭제" />
          </div>
          <div>
            <p className="text-base font-extrabold">{name}</p>
            <p className="text-sm font-medium text-gray-500">{address}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white w-[58px] h-[58px] rounded-xl border border-gray-300 flex items-center justify-center">
            <div className="bg-gray-500 w-[50px] h-[50px] rounded-lg"></div>
          </div>
          <div className="ml-5" {...(dragHandleProps || {})}>
            <Image src={twoLineHamburger} alt="순서 바꾸기 아이콘" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MyPlaceListEdit() {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<Bookmark[]>([]);

  const page = 0;
  const size = 10;

  useEffect(() => {
    if (status === "authenticated" && session?.user?.memberId) {
      fetchMyPlaces();
    }
  }, [status, session?.user?.memberId]);

  const fetchMyPlaces = async () => {
    try {
      const userId = session?.user?.memberId;
      if (!userId) return;

      const response = await client.get(`/api/members/${userId}/bookmarks`, {
        params: { page, size },
      });
      const { data: apiData } = response;
      if (apiData.status === "성공") {
        setItems(apiData.data.searchResults);
      }
    } catch (error) {
      console.error("나의 장소 목록 불러오기 에러:", error);
    }
  };

  // 드래그 앤 드랍 처리
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination || destination.index === source.index) {
      return;
    }

    const updated = Array.from(items);
    const [movedItem] = updated.splice(source.index, 1);
    updated.splice(destination.index, 0, movedItem);

    setItems(updated);
  };

  const handleDelete = (bookmarkId: number) => {
    setItems((prev) => prev.filter((item) => item.bookmarkId !== bookmarkId));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="myPlaceList">
        {(provided) => (
          <div
            className="flex flex-col "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((bookmark, index) => (
              <Draggable
                key={bookmark.bookmarkId.toString()}
                draggableId={bookmark.bookmarkId.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="mb-2"
                  >
                    <MyPlaceItem
                      {...bookmark}
                      dragHandleProps={provided.dragHandleProps}
                      onDelete={() => handleDelete(bookmark.bookmarkId)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {/* 드롭 영역 자리 표시 */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
