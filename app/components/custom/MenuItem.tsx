import { FC, ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface Props {
  title: string;
  value: string;
  icon?: string;
  children?: ReactNode;
}

export const MenuItem: FC<Props> = ({ title, icon, value, children }) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value={value}>
        <AccordionTrigger className="flex flex-row justify-between">
          {icon && <img src={icon} alt={title} width={20} />}
          <span>{title}</span>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
