import React from 'react';
import { Starship } from '~/interfaces';

interface ShipDetailsTableProps {
  starship: Starship;
}

// Table for starship
const ShipDetailsTable: React.FC<ShipDetailsTableProps> = ({ starship }) => {
  if (!starship) return null;

  return (
    <div className="overflow-x-auto">
      <table
        className="w-full border border-gray-300 bg-gray-900 bg-opacity-80 bg-cover bg-center sm:table-fixed"
        style={{
          backgroundImage: "url('/imgs/Star_Wars_themed_background.png')",
          filter: 'brightness(0.7)',
        }}
      >
        <tbody>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-bold text-yellow-500 shadow-lg">
              Model
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.model}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Manufacturer
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.manufacturer}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Class
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.starship_class}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Length
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.length} meters
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Crew
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.crew}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Passengers
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.passengers}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Cargo Capacity
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.cargo_capacity}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Consumables
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.consumables}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-500 shadow-lg">
              Hyperdrive Rating
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.hyperdrive_rating}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-400 shadow-lg">
              MGLT
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.MGLT}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-400 shadow-lg">
              Cost in credits
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.cost_in_credits}
            </td>
          </tr>
          <tr className="hover:bg-gray-800">
            <td className="border border-gray-500 px-4 py-2 font-medium text-yellow-400 shadow-lg">
              Max Speed
            </td>
            <td className="border border-gray-500 px-4 py-2 font-bold text-white shadow-lg">
              {starship.max_atmosphering_speed
                ? starship.max_atmosphering_speed
                : 'NA'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShipDetailsTable;
