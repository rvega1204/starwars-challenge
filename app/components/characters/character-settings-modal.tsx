import { ToggleOption, useCharacterSettingsStore } from '~/store';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
export const CharacterSettingsModal = () => {
  const { options, setOptions } = useCharacterSettingsStore();

  const toggleOption: ToggleOption = (option) => {
    setOptions({ [option]: !options[option] });
  };
  return (
    <Dialog>
      <DialogTrigger>Open Settings</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Characters Information to see</DialogTitle>
          <DialogDescription>
            Here you can modify the information from the characters that you
            will see.
          </DialogDescription>
          <div className="grid grid-cols-2 gap-2">
            <label>
              <input
                type="checkbox"
                checked={options.showName}
                onChange={() => toggleOption('showName')}
              />
              Show Name
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showHeight}
                onChange={() => toggleOption('showHeight')}
              />
              Show Height
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showMass}
                onChange={() => toggleOption('showMass')}
              />
              Show Mass
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showHairColor}
                onChange={() => toggleOption('showHairColor')}
              />
              Show Hair Color
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showSkinColor}
                onChange={() => toggleOption('showSkinColor')}
              />
              Show Skin Color
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showEyeColor}
                onChange={() => toggleOption('showEyeColor')}
              />
              Show Eye Color
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showBirthYear}
                onChange={() => toggleOption('showBirthYear')}
              />
              Show Birth Year
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showGender}
                onChange={() => toggleOption('showGender')}
              />
              Show Gender
            </label>
            <label>
              <input
                type="checkbox"
                checked={options.showHomeworld}
                onChange={() => toggleOption('showHomeworld')}
              />
              Show Home World
            </label>
          </div>
          <DialogFooter></DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
