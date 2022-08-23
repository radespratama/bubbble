import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { NextPage, GetServerSideProps } from "next";

import { sanityClient } from "@/libs/config/sanity";
import { FeaturedProps } from "@/libs/types/typing";
import { queryPosts } from "@/libs/query";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import Hero from "@/components/Home/Hero";
const FeaturedList = dynamic(() => import("@/components/Home/FeaturedList"));

const Home: NextPage<{ featured: [FeaturedProps] }> = ({ featured }) => {
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
        <FeaturedList featured={featured} />
      </AppLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const featured = await sanityClient.fetch(queryPosts);

  return {
    props: {
      featured,
    },
  };
};

export default Home;
