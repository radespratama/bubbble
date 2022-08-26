import React from "react";
import wtl from "windsplit";
import { ArrowElbowDownLeft } from "phosphor-react";

import { A } from "@/components/Links";
import Images from "@/components/Images";

import { DesignProps } from "@/libs/types/typing";
import { urlFor } from "@/libs/config/sanity";
import Download from "./Download";

export default function Intro({ contents }: { contents: DesignProps }) {
  const tw = {
    links: wtl(`
      inline-flex items-center
      font-medium hover:underline
      underline-offset-4
    `),
    container: wtl(`
      my-4 grid grid-cols-12
      gap-5 px-4 min-h-[80vh]
    `),
    images: wtl(`
      w-full h-full max-h-[300px]
      sm:max-h-[360px] md:max-h-[380px]
      lg:max-h-[430px] xl:max-h-[460px]
    `),
    titleDesign: wtl(`
      text-4xl font-bold
      max-w-fit line-clamp-1
    `),
    categories: wtl(`
      text-lg text-gray-600 p-1
    `),
    mainImage: wtl(`
      mt-4 rounded-xl border-2
      border-gray-950 hover:shadow-3d
      transition-all duration-300
    `),
  };
  return (
    <>
      <A href="/design" className={tw.links}>
        <ArrowElbowDownLeft size={22} className="mr-1" />
        Back to Design
      </A>
      <section className={tw.container}>
        <div className="col-span-12 sm:col-span-8">
          <h3 className={tw.titleDesign}>{contents.title}</h3>
          <p className={tw.categories}>{contents.categories[0].title}</p>
          <Images
            src={urlFor(contents.mainImage).url()}
            size={tw.images}
            alt={contents.title}
            optional={tw.mainImage}
            className="rounded-xl"
          />
        </div>
        <div className="col-span-12 sm:col-span-4">
          <Download url={contents.templateUrl} />
        </div>
      </section>
    </>
  );
}
