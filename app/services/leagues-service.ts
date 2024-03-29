import { apiInstance } from "~/api";
import { League } from "~/interfaces";
import { GenericResponse, LeagueResponse } from "~/models";

export const GetLeagues = async (): Promise<League[]> => {
  return await apiInstance
    .get<GenericResponse<LeagueResponse>>("/leagues")
    .then(({ data }) => {
      const leagues: League[] = data.response.map((response) =>
        leaguesResponseDataToLeague(response)
      );
      return leagues;
    })
    .catch((error) => {
      throw new Error(`Could not get all leagues from api: ${error}`);
    });
};

export const getLeagueById = async (id: number): Promise<League> => {
  return await apiInstance
    .get<GenericResponse<LeagueResponse>>("/leagues", {
      params: {
        id,
      },
    })
    .then(({ data }) => {
      const leagues: League[] = data.response.map((response) =>
        leaguesResponseDataToLeague(response)
      );
      return leagues[0];
    })
    .catch((error) => {
      throw new Error(`Could not get league from api: ${error}`);
    });
};

const leaguesResponseDataToLeague = (response: LeagueResponse): League => {
  const league = response.league;
  const seasons = response.seasons;
  return {
    ...league,
    seasons,
  };
};
