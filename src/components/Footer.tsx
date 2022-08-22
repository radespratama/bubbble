import React from "react";
import wtl from "windsplit";
import { A } from "./Links";

export default function Footer({ isFooter }: { isFooter?: boolean }) {
  const tw = {
    footerContainer: wtl(`
      max-w-screen-xl mx-auto
      py-4 px-4 flex flex-col space-y-1
      items-center justify-between border-t
      border-gray-100 xs:flex-row
    `),
    issuesUrl: wtl(`
      text-sky-500 underline mx-1
      hover:no-underline
    `),
    content: wtl(`flex items-center text-base mt-0`),
  };

  if (isFooter) {
    return (
      <footer className={tw.footerContainer}>
        <div className={tw.content}>
          Any problem ? Create{" "}
          <A
            href={`${process.env.NEXT_PUBLIC_ISSUES_URL}`}
            className={tw.issuesUrl}
            target="_blank"
          >
            issues
          </A>{" "}
          here.
        </div>
        <div className={tw.content}>
          &copy; {new Date().getFullYear()} Bubbble. All rights reserved.
        </div>
      </footer>
    );
  }

  return <></>;
}
