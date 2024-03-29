import { apiInstance } from "~/api";
import { Team } from "~/interfaces";
import { GenericResponse } from "~/models";
import { TeamResponse } from "~/models/TeamsResponse";

export const GetTeams = async (
  season: string,
  league: string
): Promise<Team[]> => {
  return await apiInstance
    .get<GenericResponse<TeamResponse>>("/teams", {
      params: {
        season,
        league,
      },
    })
    .then(({ data }) => {
      const teams: Team[] = data.response.map((response) =>
        teamsResponseToTeam(response)
      );
      return teams;
    })
    .catch((error) => {
      throw new Error(`Could not get all leagues from api: ${error}`);
    });
};

const teamsResponseToTeam = (teamResponse: TeamResponse): Team => {
  const { team, venue } = teamResponse;

  return {
    ...team,
    venue,
  };
};
