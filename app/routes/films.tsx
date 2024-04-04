import { Link } from "@remix-run/react";
import { filmsData } from "~/data";

export default function Films() {
  return (
    <div>
      {filmsData.map((film, index) => (
        <div key={index}>
          <h1 className="mb-5 text-2xl font-bold">{film.title}</h1>
          <hr className="mb-10" />
          <span className="font-light text-gray-700">{film.description}</span>

          <div className="mt-10 px-10 font-light text-gray-700">
            <ul className="list-disc">
              {film.items.map((item, index) => (
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
      ))}
    </div>
  );
}
