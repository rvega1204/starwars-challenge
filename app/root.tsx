import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Menu } from "~/components/Menu";
import { MenuItem } from "~/components/custom/MenuItem";

import { GetLeagues } from "~/services";
export const loader = async () => {
  const leagues = await GetLeagues();

  return json({
    leagues,
  });
};
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export function Layout({ children }: { children: React.ReactNode }) {
  const { leagues } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex">
        <Menu>
          {leagues.map((league) => (
            <MenuItem
              title={league.name}
              value={league.id.toString()}
              key={league.id}
            >
              {league.seasons.map((season) => (
                <>
                  <Link
                    key={season.year}
                    to={`/teams/${season.year}/${league.id}`}
                  >
                    {season.year}

                    <br />
                  </Link>
                </>
              ))}
            </MenuItem>
          ))}
        </Menu>
        <div id="detail" className="max-w-[calc(100vw - 250px)]">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>{" "}
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
// //
// import {
//   Links,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
// } from "@remix-run/react";
// import type { LinksFunction } from "@remix-run/node";
// import stylesheet from "~/tailwind.css?url";
//
// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylesheet },
// ];
// export function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <Meta />
//         <Links />
//       </head>
//       <body className="">
//         {children}
//         <ScrollRestoration />
//         <Scripts />
//       </body>
//     </html>
//   );
// }
//
// export default function App() {
//   return <Outlet />;
// }
