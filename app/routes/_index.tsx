import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRootRequest } from "~/services";

export const loader = async () => {
  const rootData = await getRootRequest();
  return json({ rootData });
};

export default function Index() {
  const { rootData } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-bold">This is the main Page</h1>
      <p className="text-xl font-medium">{JSON.stringify(rootData)}</p>
    </div>
  );
}
