import { MetaFunction, json } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { starshipsChallengeData } from '~/data';
import { getStarships } from '~/services/starship-service';
import { useLoaderData } from '@remix-run/react';
import { Starship } from '../interfaces/starship';
import { ShipTable } from '~/components/starships/ship-table';

export async function loader() {
  const starships = await getStarships();
  return json({ starships });
}

export const meta: MetaFunction = () => {
  return [
    { title: `${starshipsChallengeData.title} | Star Wars Challenge` },
    {
      property: 'og:title',
      content: `${starshipsChallengeData.title} | Star Wars Challenge`,
    },
    {
      name: 'description',
      content: starshipsChallengeData.description,
    },
  ];
};
export default function Starships() {
  const starships: Starship[] = useLoaderData<typeof loader>().starships;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="mb-5 text-xl font-bold sm:text-2xl lg:text-3xl">
        {starshipsChallengeData.title}
      </h1>
      <hr className="mb-6 sm:mb-8 lg:mb-10" />
      <span className="block font-light text-gray-700 sm:inline">
        {starshipsChallengeData.description}
      </span>

      <div className="mt-6 px-4 font-light text-gray-700 sm:mt-8 sm:px-6 lg:mt-10 lg:px-10">
        <ul className="list-inside list-disc space-y-2 sm:space-y-3 lg:space-y-4">
          {starshipsChallengeData.items.map((item, index) => (
            <li key={index}>
              {item.description}{' '}
              {item.documentationUrl && (
                <Link
                  to={item.documentationUrl}
                  className="text-sky-700 hover:underline"
                >
                  Review documentation.
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-10">
        <ShipTable starships={starships} />
      </div>
    </div>
  );
}
