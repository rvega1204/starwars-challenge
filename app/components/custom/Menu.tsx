import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Menu = ({ children }: Props) => {
  return (
    <div className="w-[275px] flex flex-col overflow-y-scroll px-5 py-10 bg-gray-300 h-screen">
      {children}
    </div>
  );
};
