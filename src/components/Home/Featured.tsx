import React from "react";
import wtl from "windsplit";
import { CircleWavyCheck } from "phosphor-react";

import { A } from "@/components/Links";

function FeaturedCard({
  title,
  size,
  count,
}: {
  title: string;
  size: string;
  count: number;
}) {
  const tw = {
    columnGrid: wtl(`
      relative rounded-lg flex-grow
      ${size} p-2 h-[150px] bg-white
      border-[3px] border-gray-900 cursor-pointer
      overflow-hidden pattern-column
    `),
    layoutCentering: wtl(`
      flex flex-col items-center
      justify-center h-full
    `),
    totalCount: wtl(`
      text-emerald-500 text-lg
      font-bold inline-flex items-center
    `),
  };
  return (
    <A href="/" className={tw.columnGrid}>
      <div className={tw.layoutCentering}>
        <h3 className="text-gray-950 text-3xl font-bold">{title}</h3>
        <h6 className={tw.totalCount}>
          <CircleWavyCheck size={20} className="mr-1" />
          {count} KIT
        </h6>
      </div>
    </A>
  );
}

export default function Featured() {
  const tw = {
    container: wtl(`
      max-w-screen-md mx-auto
      px-4 grid grid-rows-2 pb-4
      grid-cols-8 gap-3
    `),
  };
  return (
    <section className={tw.container}>
      <FeaturedCard
        title="Dashboard UI KIT"
        size="col-span-8 row-span-1 sm:col-span-4"
        count={30}
      />
      <FeaturedCard
        title="Mobile UI"
        size="col-span-8 row-span-1 sm:col-span-2 sm:row-span-2 sm:h-full"
        count={30}
      />
      <FeaturedCard
        title="Website UI"
        size="col-span-8 row-span-1 sm:col-span-2 sm:row-span-2 sm:h-full"
        count={30}
      />
      <FeaturedCard
        title="Icon Sets Design"
        size="col-span-8 row-span-1 sm:col-span-4"
        count={30}
      />
    </section>
  );
}
