import wtl from "windsplit";
import { Link } from "react-scroll/modules";
import { ArrowCircleDown } from "phosphor-react";

import { ButtonPushable } from "@/components/Button";

export default function Hero() {

  const tw = {
    container: wtl(`
      max-w-screen-xs mx-auto
      flex flex-col items-center
      justify-center min-h-screen
      text-center select-none px-4
    `),
    h1: wtl(`
      text-[40px] leading-[1.15]
      xs:text-[44px] lg:text-5xl
      lg:leading-[1.2] tracking-tight 
      font-bold text-gray-950
    `),
    p: wtl(`
      max-w-[500px] mx-auto
      text-base md:text-lg text-gray-600
      mt-2 mb-7
    `),
    h4: wtl(`
      max-w-[500px] w-full inline-flex
      items-center px-4 text-xl mb-2
    `),
    line: wtl(`
      min-w-[150px] mt-1 ml-2
      h-[1.5px] bg-gray-950
    `),
  };

  return (
    <article className={tw.container}>
      <h4 className={tw.h4}>
        Hi, there<span className="say">👋</span>
        <div className={tw.line} />
      </h4>
      <h1 className={tw.h1}>
        <span className="text-gradient">Bubbble</span> is a Free, Simple &
        Modern Onboarding UI KIT
      </h1>
      <p className={tw.p}>
        30+ Modern screens, We are providing ready-to-use template for your
        awesome projects.
      </p>
      <Link to="featured" spy={true} smooth={true} offset={-100} duration={400}>
        <ButtonPushable
          title="Browse Project"
          optional="text-lg -translate-y-[9px]"
        >
          <ArrowCircleDown size={22} className="mr-2" />
        </ButtonPushable>
      </Link>
    </article>
  );
}
