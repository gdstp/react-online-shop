import React, { createContext, useState } from "react";
import { addToCart, loadCartStorage, removeFromCart } from "utils/localStorage";

export interface CartInterface {
  id: number;
  title: string;
  price: string;
  quantity: string;
  image: string;
}

interface RequiredFields {
  item: CartInterface;
  type: "ADD" | "REMOVE";
}

interface AppContextInterface {
  cart: CartInterface[];
  updateCart: ({ item, type }: RequiredFields) => void;
}

export const AppCtx = createContext({} as AppContextInterface);

export const AppProvider: React.FC = ({ children }) => {
  const [currentCart, setCurrentCart] = useState(loadCartStorage());

  const updateCartStore = ({ item, type }: RequiredFields) => {
    type === "ADD" &&
      addToCart(item)
        .then((res) => setCurrentCart(res))
        .catch((err) => console.log(err));
    type === "REMOVE" &&
      removeFromCart(item.id).then((res) => setCurrentCart(res));
  };

  const updateLikeStore = ({ item, type }: RequiredFields) => {};

  return (
    <AppCtx.Provider value={{ cart: currentCart, updateCart: updateCartStore }}>
      {children}
    </AppCtx.Provider>
  );
};
