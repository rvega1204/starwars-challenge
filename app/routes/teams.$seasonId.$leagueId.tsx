import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { TeamsTable } from "~/components/custom/teams/TeamsTable";
import { GetTeams } from "~/services";

interface Props {
  params: {
    seasonId: string;
    leagueId: string;
  };
}

export const loader = async ({ params }: Props) => {
  const { seasonId, leagueId } = params;

  const teams = await GetTeams(seasonId, leagueId);
  return json({ teams });
};

export default function TeamsPage() {
  const { teams } = useLoaderData<typeof loader>();

  return (
    <div className="container w-full">
      <TeamsTable />
      {teams.map((team) => {
        return <p key={team.id}>{team.name}</p>;
      })}
    </div>
  );
}
