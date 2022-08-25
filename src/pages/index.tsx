import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { NextPage, GetServerSideProps } from "next";

import { sanityClient } from "@/libs/config/sanity";
import { DesignProps } from "@/libs/types/typing";
import { queryPosts } from "@/libs/query";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import ChildLayout from "@/layouts/ChildLayout";
const DesignList = dynamic(() => import("@/components/DesignList"));

const Home: NextPage<{ design: [DesignProps] }> = ({ design }) => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="New UI Design Resources, UI Kits, Website Design, Icons for your project - Bubbble Kit"
        description="New UI Design Resources, UI Kits, Website Design, Icons for your project. You can donate to help us to continue to develop this project."
        image={`${process.env.NEXT_PUBLIC_BASE_URL}/static/bubbble-banner.png`}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
      />
      <AppLayout isHeader isFooter>
        <Hero />
        <ChildLayout id="featured">
          <DesignList design={design} useButtonMore />
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
  const design = await sanityClient.fetch(queryPosts);

  return {
    props: {
      design,
    },
  };
};

export default Home;
