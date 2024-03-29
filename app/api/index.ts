import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": process.env.FOOTBALL_API_KEY || "",
  },
});
