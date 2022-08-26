import React from "react";
import wtl from "windsplit";
import { CircleWavyCheck, DownloadSimple, FigmaLogo } from "phosphor-react";

import { ButtonPushable } from "@/components/Button";
import { useRouter } from "next/router";

interface Props {
  url: string;
}

export default function Download({ url }: Props) {
  const router = useRouter();

  const tw = {
    container: wtl(`
      py-6 px-2 mt-24
    `),
    freemium: wtl(`
      text-lg font-bold
      px-1 uppercase
    `),
    layout: wtl(`
      mt-4 p-3 border-2
      rounded-lg border-gray-950
    `),
  };
  return (
    <div className={tw.container}>
      <div className="inline-flex items-center">
        <CircleWavyCheck size={24} />
        <h4 className={tw.freemium}>Freemium</h4>
      </div>
      <div className={tw.layout}>
        <FigmaLogo size={28} />
        <h4 className="text-xl font-bold mt-1">Working Faster and Better.</h4>
        <p className="text-base text-gray-500 mb-6">
          Download our hiqh quality product
        </p>

        <ButtonPushable
          title="Download Now"
          optional="text-base -translate-y-[5px] block"
          size="px-6 py-2"
          onClick={() => router.push(url)}
        >
          <DownloadSimple size={22} className="mr-1" />
        </ButtonPushable>
      </div>
    </div>
  );
}
