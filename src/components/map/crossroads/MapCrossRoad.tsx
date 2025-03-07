"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CrossRoadStateType, CrossRoadType } from "@/src/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import MapCrossRoadState from "./MapCrossRoadState";

type Props = {
  target: CrossRoadType & CrossRoadStateType;
  removeTarget: () => void;
  refreshState: (target: CrossRoadType & CrossRoadStateType) => void;
};

export default function MapCrossRoad({
  target,
  removeTarget,
  refreshState,
}: Props) {
  return (
    <div className="w-[calc(100%-32px)] flex flex-col">
      <div className="w-full flex items-center gap-4 justify-between mb-2">
        <div className="text-xl font-bold">{target.name}</div>
        <Button
          onClick={removeTarget}
          type="button"
          variant={"ghost"}
          size={"icon"}
        >
          <XMarkIcon className="!size-5" />
        </Button>
      </div>
      <div className="relative w-[180px] aspect-square flex items-center justify-center">
        <Image
          src={"/imgs/all-direction.svg"}
          alt="all direction"
          width={70}
          height={70}
        />
        <MapCrossRoadState
          state={target.northState}
          position="north"
          leftTime={target.northTimeLeft}
          refresh={() => refreshState(target)}
        />
        <MapCrossRoadState
          state={target.southState}
          position="south"
          leftTime={target.southTimeLeft}
          refresh={() => refreshState(target)}
        />
        <MapCrossRoadState
          state={target.eastState}
          position="east"
          leftTime={target.eastTimeLeft}
          refresh={() => refreshState(target)}
        />
        <MapCrossRoadState
          state={target.westState}
          position="west"
          leftTime={target.westTimeLeft}
          refresh={() => refreshState(target)}
        />
        <MapCrossRoadState
          state={target.northeastState}
          position="northeast"
          leftTime={target.northeastTimeLeft}
          refresh={() => refreshState(target)}
        />
        <MapCrossRoadState
          state={target.northwestState}
          position="northwest"
          leftTime={target.northwestTimeLeft}
          refresh={() => refreshState(target)}
        />
        <MapCrossRoadState
          state={target.southeastState}
          position="southeast"
          leftTime={target.southeastTimeLeft}
          refresh={() => refreshState(target)}
        />
        <MapCrossRoadState
          state={target.southwestState}
          position="southwest"
          leftTime={target.southwestTimeLeft}
          refresh={() => refreshState(target)}
        />
      </div>
    </div>
  );
}
