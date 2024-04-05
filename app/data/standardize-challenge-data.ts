import { Challenge, ChallengeItem } from '~/interfaces/challenge';

const standardizeChallengeItemsData: ChallengeItem[] = [
  {
    description:
      'Modify the styles of this website to standardize the font, the colors of the whole page in order to make it visually pleasing.',
    documentationUrl: 'https://tailwindcss.com/docs/installation',
  },
  {
    description:
      'As a recommendation, create variables in tailwind so that they can be reused for the other styles.',
  },
];

export const standardizeChallengeData: Challenge = {
  title: 'Responsive Challenge',
  description:
    'In this challenge, contestants will have the opportunity to demonstrate their proficiency in creating user interfaces by styling them using the popular CSS framework, Tailwind.',
  items: standardizeChallengeItemsData,
};
