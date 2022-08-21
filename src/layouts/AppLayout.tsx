import { ReactNode } from "react";
import Dynamic from "next/dynamic";
import wtl from "windsplit";

const Header = Dynamic(() => import("@/components/Header"));
const Footer = Dynamic(() => import("@/components/Footer"));

interface LayoutProps {
  children: ReactNode;
  isHeader: boolean;
  isFooter: boolean;
}

export default function AppLayout({
  children,
  isHeader,
  isFooter,
}: LayoutProps) {
  return (
    <>
      <Header isHeader={isHeader} />
      <main className={style.container}>{children}</main>
      <Footer isFooter={isFooter} />
    </>
  );
}

const style = {
  container: wtl(`
    flex-wrap 
    flex-grow 
    px-4
    max-w-screen-lg
    mx-auto
  `),
};
