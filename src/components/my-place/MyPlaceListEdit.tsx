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
} from "@hello-pangea/dnd";

interface MyPlaceItemProps extends MyPlace {
  // DragHandleProps 타입: react/HTML 속성 중 div에 적용 가능한 속성
  dragHandleProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function MyPlaceItem({ name, address, dragHandleProps }: MyPlaceItemProps) {
  return (
    <article>
      {/* 모바일 화면 */}
      <div className="flex items-center gap-2 md:hidden">
        <div>
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
        {/* 드래그 핸들: {...dragHandleProps} 적용 */}
        <div className="ml-1" {...dragHandleProps}>
          <Image src={twoLineHamburger} alt="순서 바꾸기 아이콘" />
        </div>
      </div>

      {/* pc 화면 */}
      <div className="hidden md:flex items-center gap-2 p-5 bg-white rounded-lg h-[80px] w-full justify-between">
        <div className="flex">
          <div className="flex items-center pr-4">
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
          {/* PC 화면에서도 햄버거 아이콘만 드래그 핸들로 */}
          <div className="ml-5" {...dragHandleProps}>
            <Image src={twoLineHamburger} alt="순서 바꾸기 아이콘" />
          </div>
        </div>
      </div>
    </article>
  );
}


export default function MyPlaceListEdit() {
  // 1) myPlaceData를 상태로 관리
  const [items, setItems] = useState<MyPlace[]>(myPlaceData);

  // 2) 드래그 종료 시 순서 업데이트
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // 드롭 위치가 없거나 제자리 드롭이면 변경 없음
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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="myPlaceList">
        {(provided) => (
          // Droppable 컨테이너
          <div className="flex flex-col gap-2" {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((myPlace, index) => (
              // Draggable로 감싸서 순서 바꾸기 가능하게
              <Draggable key={myPlace.id} draggableId={myPlace.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    // 이 div 전체가 드래그 가능하되, 핸들만 실제 드래그가 시작되도록
                    // -> dragHandleProps는 MyPlaceItem 내부에 전달
                  >
                    <MyPlaceItem
                      {...myPlace}
                      // Draggable이 제공하는 dragHandleProps를 MyPlaceItem에 넘김
                      dragHandleProps={provided.dragHandleProps}
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