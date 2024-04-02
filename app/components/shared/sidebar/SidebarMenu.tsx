import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { Plane } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import { menuData } from "~/data";
import { Link } from "@remix-run/react";

export const SidebarMenu = () => {
  return (
    <div className="min-h-screen w-[300px] min-w-[300px] border-r p-4">
      <SidebarHeader />
      <div className="my-5 ">
        <Command className="rounded-lg border">
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Applications">
              {menuData.map((data) => (
                <Link key={data.url} to={data.url}>
                  <CommandItem
                    className="flex cursor-pointer gap-2 "
                    title={data.title}
                  >
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
