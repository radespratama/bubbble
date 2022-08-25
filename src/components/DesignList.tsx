import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import wtl from "windsplit";

import { DesignProps } from "@/libs/types/typing";
import { urlFor } from "@/libs/config/sanity";

import DesignCard from "@/components/DesignCard";
import { ButtonPushable } from "@/components/Button";
import { SkeletonDesign } from "@/components/Skeleton";
import { ArrowBendDoubleUpRight } from "phosphor-react";

export default function DesignList({
  design,
  useButtonMore,
}: {
  design: [DesignProps];
  useButtonMore?: boolean;
}) {
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
    containerLayout: wtl(`
      px-4 grid pb-4
      grid-cols-12 gap-4
    `),
    containerToDesign: wtl(`
      w-full mx-auto
      min-h-[40vh] pt-10
    `),
  };
  return (
    <>
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

      {useButtonMore && (
        <section className={tw.containerToDesign}>
          <div className="flex justify-center">
            <ButtonPushable
              title="More Template"
              optional="text-base -translate-y-2"
              onClick={() => router.push("/design")}
              size="px-6 py-2"
            >
              <ArrowBendDoubleUpRight size={20} className="mr-1" />
            </ButtonPushable>
          </div>
        </section>
      )}
    </>
  );
}
