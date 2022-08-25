import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import wtl from "windsplit";

import { DesignProps } from "@/libs/types/typing";
import { urlFor } from "@/libs/config/sanity";

import DesignCard from "./DesignCard";
import { ButtonPushable } from "../Button";
import { SkeletonDesign } from "@/components/Skeleton";
import { ArrowBendDoubleUpRight } from "phosphor-react";

export default function DesignList({ design }: { design: [DesignProps] }) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (design) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    return () => clearTimeout();
  }, [design]);

  const skeletonContent = Array(6).fill("");
  const router = useRouter();

  const tw = {
    containerMain: wtl(`
      max-w-screen-xl mx-auto
      px-4 min-h-screen
    `),
    containerLayout: wtl(`
      px-4 grid pb-4
      grid-cols-12 gap-4
    `),
    containerToFeatured: wtl(`
      max-w-screen-xs mx-auto
      min-h-[40vh] pt-10
    `),
  };
  return (
    <article id="featured" className={tw.containerMain}>
      <div className="p-4 mb-4">
        <h1 className="text-3xl font-bold">Featured List</h1>
        <p className="text-lg text-gray-500">Hand-picked by our team </p>
      </div>
      <section className={tw.containerLayout}>
        {loading ? (
          skeletonContent.map((index) => (
            <SkeletonDesign key={`${index}-${Math.random()}`} />
          ))
        ) : (
          <>
            {design?.map((des) => (
              <DesignCard
                key={des._id}
                title={des.title}
                avatar={urlFor(des.author.image).url()}
                author={des.author.name}
                category={des.categories[0].title}
                href={`/design/${des.slug.current}`}
                src={urlFor(des.mainImage).url()}
              />
            ))}
          </>
        )}
      </section>

      <section className={tw.containerToFeatured}>
        <div className="flex justify-center">
          <ButtonPushable
            title="More Template"
            optional="text-base -translate-y-2"
            onClick={() => router.push("/featured")}
          >
            <ArrowBendDoubleUpRight size={20} className="mr-1" />
          </ButtonPushable>
        </div>
      </section>
    </article>
  );
}
