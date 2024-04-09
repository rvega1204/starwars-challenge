import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  options: {
    showName: boolean;
    showHeight: boolean;
    showMass: boolean;
    showHairColor: boolean;
    showSkinColor: boolean;
    showEyeColor: boolean;
    showBirthYear: boolean;
    showGender: boolean;
    showHomeworld: boolean;
  };
  setOptions: (newOptions: Partial<State['options']>) => void;
}
export type ToggleOption = (option: keyof State['options']) => void;
const initialOptionsState = {
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
