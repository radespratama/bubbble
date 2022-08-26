import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Dynamic from "next/dynamic";

import AppLayout from "@/layouts/AppLayout";
import ChildLayout from "@/layouts/ChildLayout";

const DesignList = Dynamic(() => import("@/components/DesignList"));
import SEO from "@/components/SEO";

import { sanityClient } from "@/libs/config/sanity";
import { queryAllPosts } from "@/libs/query";
import { DesignProps } from "@/libs/types/typing";

const Design: NextPage<{ design: [DesignProps] }> = ({ design }) => {
  const { asPath } = useRouter();

  return (
    <>
      <SEO
        title="More Design For Your Project - Dribbble"
        description=""
        image={`${process.env.NEXT_PUBLIC_BASE_URL}/static/bubbble-banner.png`}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
      />
      <AppLayout isHeader isFooter>
        <ChildLayout title useMarginTop>
          <DesignList design={design} />
        </ChildLayout>
      </AppLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const design = await sanityClient.fetch(queryAllPosts);

  return {
    props: {
      design,
    },
  };
};

export default Design;
