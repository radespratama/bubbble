import { ReactNode } from "react";
import Dynamic from "next/dynamic";
import wtl from "windsplit";

const Header = Dynamic(() => import("@/components/Header"));
const Footer = Dynamic(() => import("@/components/Footer"));

interface LayoutProps {
  children: ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
}

export default function AppLayout({
  children,
  isHeader,
  isFooter,
}: LayoutProps) {
  const tw = {
    container: wtl(`
      flex-wrap 
      flex-grow
      pattern-graph
      antialiased
    `),
  };
  return (
    <>
      <Header isHeader={isHeader} />
      <main className={tw.container}>{children}</main>
      <Footer isFooter={isFooter} />
    </>
  );
}
