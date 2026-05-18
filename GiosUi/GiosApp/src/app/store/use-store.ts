import { create } from 'zustand';

interface UseAppState {
    isOpenModal: boolean;
    setOpenModal: (isOpen: boolean) => void;
}

export const useAppStore = create<UseAppState>((set) => ({
    isOpenModal: false,
    setOpenModal: (isOpen: boolean) => set({ isOpenModal: isOpen }),
}));