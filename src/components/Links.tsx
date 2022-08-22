import React from "react";
import Link from "next/link";
import wtl from "windsplit";
import { withRouter } from "next/router";

interface AProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export function A({ href, children, className, target }: AProps) {
  return (
    <Link href={href} passHref>
      <a className={className} target={target} rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
}

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  router: any;
}

function ActiveLink({
  router,
  href,
  children,
  className = "",
}: ActiveLinkProps) {
  (function preFetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(href);
  };
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const tw = {
    links: wtl(`
      hover:text-gray-950 text-base 
      font-medium tracking-tight 
      md:px-2 underline-offset-[0.625rem]
    `),
  };

  return (
    <a
      className={`${
        isCurrentPath ? "text-gray-950 underline" : "text-gray-400"
      } ${className} ${tw.links}`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default withRouter(ActiveLink);
