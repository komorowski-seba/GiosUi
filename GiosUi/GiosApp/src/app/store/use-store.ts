import { create } from 'zustand';

interface UseAppState {
    isOpenModal: boolean;
    setOpenModal: (isOpen: boolean) => void;
    
    selectedCity: string;
    setSelectedCity: (city: string) => void;
}

export const useAppStore = create<UseAppState>((set) => ({
    isOpenModal: false,
    setOpenModal: (isOpen: boolean) => set({ isOpenModal: isOpen }),
    
    selectedCity: '',
    setSelectedCity: (city: string) => set({ selectedCity: city }),
}));