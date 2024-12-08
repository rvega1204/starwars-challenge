import { apiInstance } from '~/api';
import { Starship } from '../interfaces/starship';
import { StarshipResponseResult } from '../models/response/starship-response';

// Get function for the starships
export const getStarships = async (): Promise<Starship[]> => {
  return apiInstance
    .get<StarshipResponseResult>('/starships')
    .then(({ data }) =>
      data.results.map((ship) => {
        const starship: Starship = { ...ship };
        return starship;
      }),
    )
    .catch((error) => {
      console.log(error);
      return [];
    });
};
