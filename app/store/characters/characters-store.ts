import create from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  options: OptionsState;
  setOptions: (newOptions: OptionsState) => void;
}

interface OptionsState {
  showName: boolean;
  showHeight: boolean;
  showMass: boolean;
  showHairColor: boolean;
  showSkinColor: boolean;
  showEyeColor: boolean;
  showBirthYear: boolean;
  showGender: boolean;
  showHomeworld: boolean;
}

const initialOptionsState: OptionsState = {
  showName: true,
  showHeight: true,
  showMass: true,
  showHairColor: true,
  showSkinColor: true,
  showEyeColor: true,
  showBirthYear: true,
  showGender: true,
  showHomeworld: true,
};

export const useCharacterSettingsStore = create<State>()(
  persist(
    (set) => ({
      options: initialOptionsState,
      setOptions: (newOptions) =>
        set({ options: { ...initialOptionsState, ...newOptions } }),
    }),
    {
      name: 'characters-config',
    },
  ),
);
