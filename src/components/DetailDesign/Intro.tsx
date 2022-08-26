import React from "react";
import wtl from "windsplit";
import Dynamic from "next/dynamic";

import { A } from "@/components/Links";
import Images from "@/components/Images";
const Download = Dynamic(() => import("./Download"));

import { DesignProps } from "@/libs/types/typing";
import { urlFor } from "@/libs/config/sanity";

export default function Intro({ contents }: { contents: DesignProps }) {
  const tw = {
    links: wtl(`
      inline-flex items-center
      font-medium bg-gray-50
      border-2 border-gray-950
      px-2 py-1 rounded-lg mx-0 sm:mx-3
      hover:shadow-3d outline-none
      transition-all duration-300
    `),
    container: wtl(`
      my-4 grid grid-cols-12
      gap-5 px-0 sm:px-4 min-h-screen
    `),
    images: wtl(`
      w-full min-h-[300px]
      sm:min-h-[360px] md:min-h-[380px]
      lg:min-h-[430px] xl:min-h-[460px]
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
          <Download
            avatar={urlFor(contents.author.image).url()}
            authorName={contents.author.name}
            url={contents.templateUrl}
          />
        </div>
      </section>
    </>
  );
}
