import React from "react";
import { useRouter } from "next/router";
import Dynamic from "next/dynamic";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { sanityClient, urlFor } from "@/libs/config/sanity";
import { queryDynamicPosts, queryFetchSlug } from "@/libs/query";
import { DesignProps } from "@/libs/types/typing";

import AppLayout from "@/layouts/AppLayout";
import ChildLayout from "@/layouts/ChildLayout";

import SEO from "@/components/SEO";
const Intro = Dynamic(() => import("@/components/DetailDesign/Intro"));

const DesignList: NextPage<{ contents: DesignProps }> = ({ contents }) => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title={`${contents?.title} - Bubbble Kit`}
        description={`${contents?.title} - ${contents?.shortDescription}. UI kit & Website Design template to speed up our design projects.`}
        image={urlFor(contents?.mainImage).url()}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
      />
      <AppLayout isHeader isFooter>
        <ChildLayout useMarginTop>
          <Intro contents={contents} />
        </ChildLayout>
      </AppLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contents = await sanityClient.fetch(queryFetchSlug);

  const paths = contents.map((design: { slug: { current: string } }) => ({
    params: { slug: design.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const contents = await sanityClient.fetch(queryDynamicPosts, {
    slug: params?.slug,
  });

  if (!contents) {
    return { notFound: true };
  }

  return {
    props: {
      contents,
    },
  };
};

export default DesignList;
