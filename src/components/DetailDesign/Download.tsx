import React from "react";
import wtl from "windsplit";
import { CircleWavyCheck, DownloadSimple, FigmaLogo } from "phosphor-react";

import { ButtonPushable } from "@/components/Button";
import { useRouter } from "next/router";
import Images from "../Images";

interface Props {
  url: string;
  avatar: string;
  authorName: string;
}

export default function Download({ url, avatar, authorName }: Props) {
  const router = useRouter();

  const tw = {
    container: wtl(`
      py-6 px-2 sm:mt-24
    `),
    freemium: wtl(`
      text-lg font-bold
      px-1 uppercase
    `),
    layout: wtl(`
      mt-4 p-3 border-2
      rounded-lg border-gray-950
    `),
    containerAuthor: wtl(`
      flex items-center
      space-x-2 mt-2 py-2
    `),
    titleAuthor: wtl(`
      font-semibold text-base
      tracking-tight text-gray-500
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
        <p className="text-base text-gray-500 mb-6 line-clamp-1">
          Download our hiqh quality product
        </p>

        <ButtonPushable
          title="Download Now"
          optional="text-base -translate-y-[5px]"
          size="px-4 md:px-6 py-2"
          onClick={() => router.push(url)}
        >
          <DownloadSimple size={22} className="mr-0 xs:mr-2" />
        </ButtonPushable>
      </div>
      <div className={tw.containerAuthor}>
        <Images
          size="h-7 w-7"
          src={avatar}
          className="rounded-full"
          alt={authorName}
        />
        <h5 className={tw.titleAuthor}>{authorName}</h5>
      </div>
    </div>
  );
}
