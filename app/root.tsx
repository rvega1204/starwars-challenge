import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import type { LinksFunction } from "@remix-run/node";
import { menuData } from "./seed";
import stylesheet from "~/tailwind.css?url";
import { SidebarMenu } from "./components/shared/sidebar/SidebarMenu";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex items-start justify-between">
        <SidebarMenu></SidebarMenu>
        <main className="h-full w-full p-5">
          <Tabs defaultValue="account" className="h-72 w-[full]">
            <TabsList className=" w-full grid-cols-none">
              {menuData.map((item) => (
                <Link key={item.url} to={item.url}>
                  <TabsTrigger key={item.title} value={item.title}>
                    {item.title}
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
          </Tabs>
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
