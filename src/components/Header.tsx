import { Coffee, Equals } from "phosphor-react";
import wtl from "windsplit";

import ActiveLink, { A } from "./NavLink";
import { IconBubbble } from "./Icon";

export default function Header({ isHeader }: { isHeader?: boolean }) {
  const style = {
    containerHeader: wtl(`
      fixed w-full top-0
      left-0 z-[40]
      bg-gray-950/40 backdrop-blur
    `),
    nav: wtl(`
      max-w-screen-lg mx-auto
      transition-all duration-300
      grid grid-cols-3 gap-4
      px-4 py-4 md:py-5
    `),
    icon: wtl(`
      h-9 w-9 fill-white
    `),
    navContent: wtl(`
      flex items-center justify-end
      col-span-1 md:col-span-2 
      space-x-3
    `),
    buttonPushable: wtl(`
      bg-sky-600 rounded-lg
      border-none p-0 outline-offset-4 
      cursor-pointer select-none button-pushable
    `),
    frontble: wtl(`
      px-3 py-2 rounded-lg
      inline-flex items-center
      transform -translate-y-[6px]
      text-base bg-sky-500 frontble
      will-change-transform transition-transform 
      duration-300
    `),
    hideAndShow: wtl(`hidden md:inline`),
    centering: wtl(`mx-auto md:mx-0`),
  };

  if (isHeader) {
    return (
      <header className={style.containerHeader}>
        <nav className={style.nav}>
          <button className="inline md:hidden col-span-1">
            <Equals size={24} />
          </button>
          <A href="/" className={`${style.centering} col-span-1`}>
            <IconBubbble className={style.icon} />
          </A>
          <div className={style.navContent}>
            <ActiveLink className={style.hideAndShow} href="/">
              Home
            </ActiveLink>
            <ActiveLink className={style.hideAndShow} href="/category">
              Category
            </ActiveLink>
            <ActiveLink className={style.hideAndShow} href="/report">
              Report !
            </ActiveLink>
            <button className={style.buttonPushable}>
              <span className={style.frontble}>
                <Coffee size={20} className="md:mr-2" />
                <span className={style.hideAndShow}>Buy me a coffee</span>
              </span>
            </button>
          </div>
        </nav>
      </header>
    );
  }

  return <></>;
}
