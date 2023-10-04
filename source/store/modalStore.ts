import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  isOpened: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const modalStore = create<Store>()(
  persist(
    (set) => ({
      isOpened: false,
      openModal: () => set({ isOpened: true }),
      closeModal: () => set({ isOpened: false }),
    }),
    {
      name: 'modal',
    }
  )
);

export default modalStore;
