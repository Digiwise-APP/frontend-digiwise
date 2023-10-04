import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  isOpened: boolean;
  level: number;
  openModal: (receivedLevel: number) => void;
  closeModal: () => void;
};

const modalStore = create<Store>()(
  persist(
    (set) => ({
      isOpened: false,
      level: 1,
      openModal: (receivedLevel) => set({ isOpened: true, level: receivedLevel }),
      closeModal: () => set({ isOpened: false }),
    }),
    {
      name: 'modal',
    }
  )
);

export default modalStore;
