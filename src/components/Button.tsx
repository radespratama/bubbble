import React from "react";
import wtl from "windsplit";

interface Props {
  children: React.ReactNode;
  title: string;
  onClick?: () => void;
  optional?: string;
}

export function ButtonPushable({ children, title, optional, onClick }: Props) {
  const value = "Buy us a coffee";

  const tw = {
    containerPushable: wtl(`
      bg-gray-900 rounded-lg border-none
      cursor-pointer outline-offset-4
      pushable
    `),
    layoutFront: wtl(`
      flex items-center px-6 py-2 rounded-lg
      ${optional} bg-white border-[1.8px] border-gray-950 
      text-gray-950 transform will-change-transform
      transition-transform duration-200 ease-in front
    `),
    hideConditional: wtl(`
      ${title === value && "hidden sm:inline"}
    `),
  };

  return (
    <button onClick={onClick} className={tw.containerPushable}>
      <span className={tw.layoutFront}>
        {children}
        <span className={tw.hideConditional}>{title}</span>
      </span>
    </button>
  );
}
