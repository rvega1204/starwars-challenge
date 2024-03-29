import { League } from "./league";

export interface Country {
  name: string;
  code?: string;
  flag?: string;
  leagues: League[];
}
