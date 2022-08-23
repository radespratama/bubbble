import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
const Hero = dynamic(() => import("@/components/Home/Hero"));
const Featured = dynamic(() => import("@/components/Home/Featured"));

const Home: NextPage = () => {
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
        <article id="featured" className="min-h-screen">
          <Featured />
        </article>
      </AppLayout>
    </>
  );
};

export default Home;
