import { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { standardizeChallengeData } from '~/data';

export const meta: MetaFunction = () => {
  return [
    { title: `${standardizeChallengeData.title} | Star Wars Challenge` },
    {
      property: 'og:title',
      content: `${standardizeChallengeData.title} | Star Wars Challenge`,
    },
    {
      name: 'description',
      content: standardizeChallengeData.description,
    },
  ];
};
export default function Standardize() {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">
        {standardizeChallengeData.title}
      </h1>
      <hr className="mb-10" />
      <span className="font-light text-gray-700">
        {standardizeChallengeData.description}
      </span>

      <div className="mt-10 px-10 font-light text-gray-700">
        <ul className="list-disc">
          {standardizeChallengeData.items.map((item, index) => (
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
    </div>
  );
}
