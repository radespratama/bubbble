import React from "react";
import wtl from "windsplit";

export default function Hero() {
  const tw = {
    container: wtl(`
      pt-14 md:pt-20 max-w-screen-xl mx-auto
      min-h-screen px-4
    `),
  };
  return <div className={tw.container}>Intro</div>;
}
