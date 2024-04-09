import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  options: {
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
    (set, get) => ({
      options: initialOptionsState,
      setOptions: (newOptions) => {
        const { options } = get();
        set({ options: { ...options, ...newOptions } });
      },
    }),
    {
      name: 'characters-config',
    },
  ),
);
