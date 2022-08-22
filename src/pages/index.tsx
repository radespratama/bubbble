import React from "react";
import type { NextPage } from "next";

import AppLayout from "@/layouts/AppLayout";
import SEO from "@/components/SEO";
import Hero from "@/components/Home/Hero";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="New UI Design Resources, UI Kits, Website Design, Icons for your project - Bubbble Kit"
        description="New UI Design Resources, UI Kits, Website Design, Icons for your project. You can donate to help us to continue to develop this project."
        image={`${process.env.NEXT_PUBLIC_BASE_URL}/static/bubbble-banner.png`}
      />
      <AppLayout isHeader isFooter>
        <Hero />
      </AppLayout>
    </>
  );
};

export default Home;
