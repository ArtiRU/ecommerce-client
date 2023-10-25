import { Product } from '@/types/types';
import { create } from 'zustand';

interface UseModalStore {
  data?: Product;
  isOpen: boolean;
  onClose: () => void;
  onOpen: (data: Product) => void;
}

export const useModalStore = create<UseModalStore>((set) => ({
  data: undefined,
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: (data: Product) => set({ data, isOpen: true }),
}));
