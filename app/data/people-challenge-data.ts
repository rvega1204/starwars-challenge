import { Challenge, ChallengeItem } from "~/interfaces/challenge";

const peopleChallengeItemsData: ChallengeItem[] = [];

export const PeopleChallengeData: Challenge = {
  title: "People Challenge",
  description:
    "In this challenge, participants will employ the Star Wars API's 'people' endpoint to gather character details, structuring them into card-based layouts. Leveraging Tailwind CSS for styling and integrating ShadCN components for additional UI enhancements, contestants will design a dynamic webpage showcasing Star Wars character information within visually appealing card structures.",
  items: peopleChallengeItemsData,
};
