import { create } from "zustand";

interface UIState {
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  mobileMenuSlide: boolean;
  activeMenuSlide: any;
  setSearchOpen: (isOpen: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  setMobileMenuSlide: (slide: boolean) => void;
  setActiveMenuSlide: (item: any) => void;
}

export const useUIState = create<UIState>((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  mobileMenuSlide: false,
  activeMenuSlide: null,
  setSearchOpen: (isOpen) => set({ searchOpen: isOpen }),
  setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),
  setMobileMenuSlide: (slide) => set({ mobileMenuSlide: slide }),
  setActiveMenuSlide: (item) => set({ activeMenuSlide: item }),
}));
