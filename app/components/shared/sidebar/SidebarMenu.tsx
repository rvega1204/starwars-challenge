import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { Plane } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import { menuData } from "~/seed";
import { Link } from "@remix-run/react";

export const SidebarMenu = () => {
  return (
    <div className="min-h-screen w-[300px] min-w-[300px] border-r p-4">
      <SidebarHeader />
      <div className="grow">
        <Command>
          <CommandList>
            <CommandGroup heading="Applications">
              {menuData.map((data) => (
                <Link to={data.url}>
                  <CommandItem key={data.url} className="flex gap-2">
                    <Plane />
                    {data.title}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
