import React from "react";
import wtl from "windsplit";
import { Equals, Coffee } from "phosphor-react";
import { ButtonPushable } from "@/components/Button";

import { IconBubbble } from "./Icon";
import ActiveLink, { A } from "./Links";

export default function Header({ isHeader }: { isHeader?: boolean }) {
  const tw = {
    headerContainer: wtl(`
      fixed w-full top-0 left-0
      z-30
    `),
    navigation: wtl(`
      max-w-screen-xl mx-auto border-b
      border-r border-l border-gray-100
      rounded-br-2xl grid-cols-3 gap-4
      backdrop-blur-md bg-white/10
      px-4 py-3 grid rounded-bl-2xl
    `),
    icon: wtl(`h-9 w-9 fill-gray-900`),
    column: wtl(`flex items-center col-span-1`),
    hideAndShow: wtl(`hidden md:inline`),
  };
  if (isHeader) {
    return (
      <header className={tw.headerContainer}>
        <nav className={tw.navigation}>
          <div className="col-span-1 block md:hidden">
            <button className="p-[6px]">
              <Equals size={24} />
            </button>
          </div>
          <div className={`${tw.column} justify-center md:justify-start`}>
            <A href="/"><IconBubbble className={tw.icon} /></A>
          </div>
          <div className={`${tw.column} md:col-span-2 justify-end space-x-3`}>
            <ActiveLink className={tw.hideAndShow} href="/">
              Home
            </ActiveLink>
            <ActiveLink className={tw.hideAndShow} href="/category">
              Category
            </ActiveLink>
            <ButtonPushable 
              title="Buy us a coffee" 
              optional="text-base -translate-y-1"
            >
              <Coffee size={22} className="mr-0 sm:mr-2" />
            </ButtonPushable>
          </div>
        </nav>
      </header>
    );
  }

  return <></>;
}
