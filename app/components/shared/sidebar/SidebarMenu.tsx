import { SidebarHeader } from "./SidebarHeader";
import { Plane } from "lucide-react";
import { menuData } from "~/data";
import { useLocation } from "@remix-run/react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { MenuItemGroup } from "./SidebarMenuItemGroup";

export const SidebarMenu = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen w-[300px] min-w-[300px] border-r p-4">
      <SidebarHeader />
      <MenuItemGroup title="Applications">
        {menuData.map((item) => (
          <SidebarMenuItem
            {...item}
            icon={<Plane />}
            isActive={item.url === location.pathname}
            key={item.url}
          />
        ))}
      </MenuItemGroup>
    </div>
  );
};
