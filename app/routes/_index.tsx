import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Menu } from "~/components/Menu";
import { MenuItem } from "~/components/custom/MenuItem";
import { GetLeagues } from "~/services";

export const meta: MetaFunction = () => {
  return [
    { title: "BAS POC Football" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-bold">This is the main Page</h1>
      <p className="text-xl font-medium">
        Select a Season + a League from the Sidebar Menu
      </p>
    </div>
  );
}
