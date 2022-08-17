import React from "react";

export default function Header({ isHeader }: { isHeader: boolean }) {
  if (isHeader) {
    return <div>Header</div>;
  }

  return <div>Header Dashboard</div>;
}
