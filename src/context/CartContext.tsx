'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  quantity: number;
}

interface ShoppingCartContextType {
  cartitems: CartItem[];
  cartQuantity: number;
  getItemsCount: (id: number) => number;
  addtoCart: (id: number) => void;
  decreaseCount: (id: number) => void;
  removeFromCart: (id: number) => void;
  
}

const shoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export default function CartContext({ children }: CartProviderProps) {
  const initialValue: CartItem[] = typeof window !== 'undefined' && localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart')!)
    : [];

  const [cartitems, setCartItems] = useState<CartItem[]>(initialValue);
  const cartQuantity = cartitems.reduce((quantity, item) => item.quantity + quantity, 0);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartitems));
  }, [cartitems]);

  const getItemsCount = (id: number): number => {
    return cartitems.find((item) => item.id === id)?.quantity || 0;
  };

  const addtoCart = (id: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...prevItems, { id, quantity: 1 }];
      }
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseCount = (id: number) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item || item.quantity <= 1) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <shoppingCartContext.Provider
      value={{
        cartitems,
        cartQuantity,
        getItemsCount,
        addtoCart,
        decreaseCount,
        removeFromCart,
     
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}

export const useCart = (): ShoppingCartContextType => {
  const context = useContext(shoppingCartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContext provider');
  }
  return context;
};
