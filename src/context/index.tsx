import React, { createContext, useState } from "react";
import {
  addToCart,
  loadCartStorage,
  removeFromCart,
  resetCartStorage,
  updateCartStorage,
} from "utils/localStorage";

export interface CartInterface {
  id: number;
  title: string;
  price: string;
  quantity: string;
  image: string;
}

interface RequiredFields {
  item: CartInterface;
  type: "ADD" | "REMOVE" | "UPDATE" | "RESET";
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
    type === "UPDATE" &&
      updateCartStorage(item.id, item.quantity).then((res) =>
        setCurrentCart(res)
      );
    type === "RESET" && resetCartStorage().then((res) => setCurrentCart(res));
  };

  return (
    <AppCtx.Provider value={{ cart: currentCart, updateCart: updateCartStore }}>
      {children}
    </AppCtx.Provider>
  );
};
