import React from "react";
import wtl from "windsplit";

interface Props {
  children: React.ReactNode;
  id?: string;
  title?: boolean;
  useMarginTop?: boolean;
}

export default function ChildLayout({
  children,
  id,
  title,
  useMarginTop,
}: Props) {
  const tw = {
    containerMain: wtl(`
      max-w-screen-xl mx-auto
      px-4 min-h-screen ${useMarginTop && "pt-[90px]"}
    `),
    h1: wtl(`
      text-3xl md:text-[40px]
      leading-snug font-bold
    `),
    p: wtl(`
      text-base md:text-lg
      text-gray-600
    `),
  };
  return (
    <article id={id} className={tw.containerMain}>
      {title && (
        <section className="flex flex-col items-center pb-8">
          <h1 className={tw.h1}>Design Template</h1>
          <p className={tw.p}>More design for your project.</p>
        </section>
      )}
      {children}
    </article>
  );
}
