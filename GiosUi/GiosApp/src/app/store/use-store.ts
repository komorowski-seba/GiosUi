import { create } from 'zustand';

interface UseAppState {
    isOpenModal: boolean;
    setOpenModal: (isOpen: boolean) => void;
    
    selectedCity: number;
    setSelectedCity: (city: number) => void;
}

export const useAppStore = create<UseAppState>((set) => ({
    isOpenModal: false,
    setOpenModal: (isOpen: boolean) => set({ isOpenModal: isOpen }),
    
    selectedCity: 0,
    setSelectedCity: (city: number) => set({ selectedCity: city }),
}));