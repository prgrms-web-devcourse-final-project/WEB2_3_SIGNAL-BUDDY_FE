"use client"

import Image from "next/image";
import deleteImage from "@/public/imgs/Delete.svg";
import twoLineHamburger from "@/public/imgs/two-line-hamburger.svg";
import { MyPlace, myPlaceData } from "./MyPlaceData";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";

interface MyPlaceItemProps extends MyPlace {
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
  onDelete?: () => void;
}

function MyPlaceItem({ name, address, dragHandleProps, onDelete, }: MyPlaceItemProps) {
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
        <div className="ml-1" {...dragHandleProps || {}}>
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
          <div className="ml-5" {...dragHandleProps || {}}>
            <Image src={twoLineHamburger} alt="순서 바꾸기 아이콘" />
          </div>
        </div>
      </div>
    </article>
  );
}


export default function MyPlaceListEdit() {

  const [items, setItems] = useState<MyPlace[]>(myPlaceData);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination || destination.index === source.index) {
      return;
    }

    // 기존 배열 복사
    const updated = Array.from(items);
    // 드래그된 아이템을 꺼내고
    const [movedItem] = updated.splice(source.index, 1);
    // 드롭 위치에 삽입
    updated.splice(destination.index, 0, movedItem);

    setItems(updated);
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="myPlaceList">
        {(provided) => (
          <div className="flex flex-col gap-2" {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((myPlace, index) => (
              <Draggable key={myPlace.id} draggableId={myPlace.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <MyPlaceItem
                      {...myPlace}
                      dragHandleProps={provided.dragHandleProps}
                      onDelete={() => handleDelete(myPlace.id)}
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