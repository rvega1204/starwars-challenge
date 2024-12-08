import { Starship } from '~/interfaces';
import { Button } from '../ui/button';
import ShipDetailsTable from './ship-details-table';

// Interfaces for the modal
interface StarshipDetailsModalProps {
  starship: Starship | null;
  onClose: () => void;
}

interface ModalHeaderProps {
  starship: Starship;
}

interface ModalFooterProps {
  onClose: () => void;
}

export const StarshipDetailsModal = ({
  starship,
  onClose,
}: StarshipDetailsModalProps) => {
  if (!starship) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-4 w-full max-w-lg rounded-lg bg-white shadow-lg sm:max-w-xl lg:max-w-2xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
        >
          ✕
        </button>
        {/* Modal components */}
        <ModalHeader starship={starship} />
        <ModalContent starship={starship} />
        <ModalFooter onClose={onClose} />
      </div>
    </div>
  );
};

export const ModalHeader = ({ starship }: ModalHeaderProps) => (
  <div className="border-b px-6 py-4">
    <h2 className="text-lg font-bold text-gray-800">
      Details for <i>{starship.name}</i>
    </h2>
  </div>
);

export const ModalContent = ({ starship }: ModalHeaderProps) => (
  <div className="px-6 py-4 text-sm text-black">
    <ShipDetailsTable starship={starship} />
  </div>
);

export const ModalFooter = ({ onClose }: ModalFooterProps) => (
  <div className="flex flex-wrap justify-end space-x-2 border-t px-6 py-4">
    <Button
      className="rounded-full bg-yellow-500 px-6 py-3 font-bold uppercase tracking-wider 
      text-black shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-white"
      onClick={onClose}
    >
      Close
    </Button>
  </div>
);
