import React from "react";
import type { NextPage } from "next";

import AppLayout from "@/layouts/AppLayout";
import Intro from "@/components/Featured/Intro";

const Featured: NextPage = () => {
  return (
    <AppLayout isHeader isFooter>
      <Intro />
    </AppLayout>
  );
};

export default Featured;
