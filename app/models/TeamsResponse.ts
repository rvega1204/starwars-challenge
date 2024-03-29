export interface TeamResponse {
  team: Team;
  venue: Venue;
}

export interface Team {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export interface Venue {
  id: number;
  xname: string;
  address: null | string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}
