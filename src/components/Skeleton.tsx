import React from "react";
import wtl from "windsplit";

export function SkeletonDesign() {
  const tw = {
    containerCard: wtl(`
      col-span-12 sm:col-span-6 md:col-span-4
      bg-gray-300 rounded-lg flex flex-col
      relative text-left overflow-hidden
      animate-pulse
    `),
    wrapper: wtl(`
      flex items-center
      space-x-2 mt-2
    `),
    skeletonLine: wtl(`
      w-full bg-gray-400/40 rounded-md
    `),
  };
  return (
    <div className={tw.containerCard}>
      <div className="w-full h-[200px] bg-gray-200" />
      <div className="px-4 py-3 space-y-2">
        <div className={`${tw.skeletonLine} max-w-[280px] h-6`} />
        <div className={`${tw.skeletonLine} max-w-[100px] h-4`} />
        <div className={tw.wrapper}>
          <div className="w-8 h-8 rounded-full bg-gray-400" />
          <div className={`${tw.skeletonLine} max-w-[180px] h-4`} />
        </div>
      </div>
    </div>
  );
}
