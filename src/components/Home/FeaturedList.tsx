import React from "react";
import wtl from "windsplit";

import FeaturedCard from "./FeaturedCard";
import { FeaturedProps } from "@/libs/types/typing";
import { urlFor } from "@/libs/config/sanity";

export default function Featured({ featured }: { featured: [FeaturedProps] }) {

  const tw = {
    containerMain: wtl(`
      max-w-screen-xl mx-auto
      px-4 min-h-screen
    `),
    containerLayout: wtl(`
      px-4 grid pb-4
      grid-cols-12 gap-4
    `),
  };
  return (
    <article id="featured" className={tw.containerMain}>
      <div className="p-4 mb-4">
        <h1 className="text-3xl font-bold">Featured List</h1>
        <p className="text-lg text-gray-500">Hand-picked by our team </p>
      </div>
      <section className={tw.containerLayout}>
        {featured.map((feature) => (
          <FeaturedCard
            key={feature._id}
            title={feature.title}
            avatar={urlFor(feature.author.image).url()}
            author={feature.author.name}
            href={`/featured/${feature.slug.current}`}
            src={urlFor(feature.mainImage).url()}
          />
        ))}
      </section>
    </article>
  );
}
