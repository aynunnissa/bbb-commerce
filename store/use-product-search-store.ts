import { IProduct } from '@/types/product';
import { create } from 'zustand';

interface WishListState {
  query: string;
  setQuery: (query: string) => void;
}


const useProductSearch = create<WishListState>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query }),
}));

export default useProductSearch;
