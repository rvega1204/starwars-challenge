import { FC } from 'react';
import { Character } from '~/interfaces';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface Props {
  character: Character;
}
export const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{character.name}</CardTitle>
        <CardDescription>{character.homeworld}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Gender: {character.gender}</p>
      </CardContent>
    </Card>
  );
};
