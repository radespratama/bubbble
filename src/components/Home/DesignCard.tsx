import React from "react";
import wtl from "windsplit";

import { A } from "@/components/Links";
import Images from "@/components/Images";

interface CardProps {
  title: string;
  href: string;
  src: string;
  avatar: string;
  author: string;
  category: string;
}

export default function DesignCard({
  title,
  href,
  src,
  avatar,
  author,
  category,
}: CardProps) {
  const tw = {
    containerCard: wtl(`
      col-span-12 sm:col-span-6 md:col-span-4
      bg-white rounded-lg shadow-md shadow-gray-200/70 
      hover:shadow-lg hover:shadow-gray-200/70
      transition-shadow duration-200 flex flex-col
      relative text-left overflow-hidden
    `),
    wrapper: wtl(`
      flex items-center
      space-x-2 mt-2
    `),
    cardTitle: wtl(`
      line-clamp-1 text-lg font-bold
      hover:underline underline-offset-4
    `),
    cardAuthor: wtl(`
      font-semibold text-base
      tracking-tight text-gray-500
    `),
  };
  return (
    <A href={href} className={tw.containerCard}>
      <Images size="w-full h-[200px]" src={src} />
      <div className="px-4 py-3">
        <h4 className={tw.cardTitle}>{title}</h4>
        <p className="font-normal text-gray-500">{category}</p>
        <div className={tw.wrapper}>
          <Images
            size="h-7 w-7"
            src={avatar}
            className="rounded-full"
            alt={author}
          />
          <h5 className={tw.cardAuthor}>{author}</h5>
        </div>
      </div>
    </A>
  );
}
