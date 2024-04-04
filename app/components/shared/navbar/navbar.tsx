import { useLocation } from "@remix-run/react";
import { Tabs, TabsList } from "~/components/ui/tabs";
import { menuData } from "~/data";
import { NavbarItem } from ".";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Tabs defaultValue="account" className="w-[full]">
      <TabsList className="h-16 w-full grid-cols-none">
        {menuData.map((item) => (
          <NavbarItem
            key={item.url}
            {...item}
            isActive={item.url === location.pathname}
          />
        ))}
      </TabsList>
    </Tabs>
  );
};
