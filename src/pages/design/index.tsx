import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import AppLayout from "@/layouts/AppLayout";
import Hero from "@/components/Design/Hero";
import SEO from "@/components/SEO";

const Design: NextPage = () => {
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
        <Hero />
      </AppLayout>
    </>
  );
};

export default Design;
