import { Starship } from '~/interfaces';
import { Link } from '@remix-run/react';
import { StarshipDetailsModal } from './starship-modal';
import { useState } from 'react';

interface ShipTableProps {
  starships: Starship[];
}

export const ShipTable = ({ starships }: ShipTableProps) => {
  const [selectedStarship, setSelectedStarship] = useState<Starship | null>(
    null,
  );

  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const [searchTerm, setSearchTerm] = useState('');

  // Headers for the table
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'model', label: 'Model' },
    { key: 'manufacturer', label: 'Manufacturer' },
    { key: 'starship_class', label: 'Class' },
  ];

  // For the starship-modal
  const openDetails = (starship: Starship) => {
    setSelectedStarship(starship);
  };

  // For the starship-modal
  const closeDetails = () => {
    setSelectedStarship(null);
  };

  // Filters the list of starships based on the search term
  const filteredStarships = starships.filter((starship) =>
    headers.some((header) =>
      // Converts the starship value to a string and then to lowercase
      (starship[header.key as keyof Starship] as string)
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()),
    ),
  );

  // Sort the starships
  const sortedStarships = [...filteredStarships].sort((a, b) => {
    if (!sortConfig) return 0;

    // Retrieve the values for the current sorting key from objects "a" and "b".
    const aValue = a[sortConfig.key as keyof Starship] as string;
    const bValue = b[sortConfig.key as keyof Starship] as string;

    // Compare the values and return the result based on the sorting direction.
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;

    return 0;
  });

  // Handle column sorting
  const handleSort = (key: string) => {
    // Check if a sorting configuration already exists and the current key matches the one being sorted.
    if (sortConfig && sortConfig.key === key) {
      // If the key matches, toggle the sorting direction (asc <-> desc).
      setSortConfig({
        key,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      // If the key doesn't match or no sortConfig exists, set a new configuration with ascending order.
      setSortConfig({ key, direction: 'asc' });
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="mb-5 text-center text-2xl font-extrabold sm:text-left sm:text-3xl lg:text-4xl">
        Starships
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-500 bg-gray-900 p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <hr className="mb-6 border-gray-500 sm:mb-8 lg:mb-10" />
      <div className="overflow-x-auto rounded-lg bg-gray-800 p-4 shadow-lg">
        <table className="min-w-full table-auto border-collapse border border-gray-500">
          <thead className="bg-gray-900 text-yellow-400">
            <tr>
              {headers.map((header) => (
                <th
                  key={header.key}
                  onClick={() => handleSort(header.key)}
                  className="cursor-pointer px-4 py-2 text-left text-sm font-semibold sm:px-6 sm:py-3"
                >
                  {header.label}{' '}
                  {sortConfig?.key === header.key &&
                    (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              ))}
              <th className="px-4 py-2 text-left text-sm font-semibold sm:px-6 sm:py-3">
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStarships.map((starship, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-800 ${
                  index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'
                }`}
              >
                {headers.map((header) => (
                  <td key={header.key} className="px-4 py-2 text-sm text-white">
                    {starship[header.key as keyof typeof starship] || 'N/A'}
                  </td>
                ))}
                <td className="px-4 py-2 text-sm text-white">
                  <Link
                    to="#"
                    onClick={() => openDetails(starship)}
                    className="font-bold text-yellow-500 hover:text-yellow-300"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStarships.length === 0 && (
          <p className="mt-4 text-center text-white">No results found.</p>
        )}
      </div>
      {selectedStarship && ( // Validation for the modal
        <StarshipDetailsModal
          starship={selectedStarship}
          onClose={closeDetails}
        />
      )}
    </div>
  );
};
