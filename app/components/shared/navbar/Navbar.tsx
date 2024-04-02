import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { menuData } from "~/data";
import { NavbarItem } from "./NavbarItem";
import { useLocation } from "@remix-run/react";

export const Navbar = () => {
  const location = useLocation();
  const handleSelect = (url: string) => {
    if (url === location.pathname) {
      return true;
    }

    return false;
  };

  return (
    <Tabs defaultValue="account" className="w-[full]">
      <TabsList className="h-16 w-full grid-cols-none">
        {menuData.map((item) => (
          <NavbarItem
            key={item.url}
            {...item}
            isActive={handleSelect(item.url)}
          />
        ))}
      </TabsList>
    </Tabs>
  );
};
