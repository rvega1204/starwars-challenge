import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SpeciesChallengeData } from "~/data/species-challenge-data";
export const meta: MetaFunction = () => {
  return [
    { title: `${SpeciesChallengeData.title} | Star Wars Challenge` },
    {
      property: "og:title",
      content: `${SpeciesChallengeData.title} | Star Wars Challenge`,
    },
    {
      name: "description",
      content: SpeciesChallengeData.description,
    },
  ];
};
export default function Species() {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">{SpeciesChallengeData.title}</h1>
      <hr className="mb-10" />
      <span className="font-light text-gray-700">
        {SpeciesChallengeData.description}
      </span>

      <div className="mt-10 px-10 font-light text-gray-700">
        <ul className="list-disc">
          {SpeciesChallengeData.items.map((item, index) => (
            <li key={index}>
              {item.description}{" "}
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
