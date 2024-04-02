import { Link } from "@remix-run/react";
import { MenuItem } from "~/interfaces";

export const NavbarItem = ({ isActive, url, title }: MenuItem) => {
  return (
    <div>
      <Link key={url} to={url}>
        <button
          value={title}
          className={`mx-2 rounded-md ${isActive ? " bg-white text-black shadow-md" : " bg-accent"} px-5 py-1`}
        >
          {title}
        </button>
      </Link>
    </div>
  );
};
