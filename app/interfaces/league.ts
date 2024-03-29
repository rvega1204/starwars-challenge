import { Season } from "./season";

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
  seasons: Season[];
}
