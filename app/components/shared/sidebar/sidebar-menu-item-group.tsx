import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title: string;
}

export const MenuItemGroup = ({ children, title }: Props) => {
  return (
    <div className="my-5 flex grow flex-col border-b border-b-gray-400 pb-5 pt-2 sm:flex-row lg:flex-col">
      <span className="text-md mb-2 text-sm text-gray-600 sm:text-base lg:mb-5">
        {title}
      </span>
      <div className="w-full">{children}</div>
    </div>
  );
};
