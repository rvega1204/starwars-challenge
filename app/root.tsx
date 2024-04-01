import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import type { LinksFunction } from "@remix-run/node"
import { menuData } from "./seed"
import stylesheet from "~/tailwind.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
          {menuData.map((item) => (
            <TabsContent key={item.title} value={item.title}>
              <div>{item.title}</div>
            </TabsContent>
          ))}
        </Tabs>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
