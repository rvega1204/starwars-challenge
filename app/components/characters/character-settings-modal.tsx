import clsx from 'clsx';
import { useState } from 'react';
import { ToggleOption, useCharacterSettingsStore } from '~/store';
import { IoCloseOutline } from 'react-icons/io5';
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
