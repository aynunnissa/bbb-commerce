import { IProduct } from '@/types/product';
import { create } from 'zustand';

interface WishListState {
  items: IProduct[];
  checkIsAdded: (id: number) => boolean;
  toggleItem: (product: IProduct) => void;
}


const useWishList = create<WishListState>((set, get) => ({
  items: [],
  checkIsAdded: (id: number) => {
    const currentItems = get().items;
    const productInd = currentItems.findIndex(item => item.id === id);

    return productInd >= 0;
  },
  toggleItem: (product: IProduct) => {
    const currentItems = get().items;
    const productInd = currentItems.findIndex(item => item.id === product.id);
    if (productInd >= 0) {
      currentItems.splice(productInd, 1)
      set({ items: currentItems });
    } else {
      set({ items: [...currentItems, product] })
    }
    
  }
}));

export default useWishList;
