import React from "react";

export default function Footer({ isFooter }: { isFooter?: boolean }) {
  if (isFooter) {
    return <div>Footer</div>;
  }

  return <></>;
}
