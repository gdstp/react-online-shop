import { CartInterface } from "context";

export const addToCart = ({
  id,
  title,
  price,
  quantity,
  image,
}: CartInterface): Promise<CartInterface[]> => {
  return new Promise(function (resolve) {
    const cartStoreContent = localStorage.getItem("shop:cart");
    const item = { id, title, price, quantity, image };
    let parsed: CartInterface[];
    const arr: CartInterface[] = [];

    if (cartStoreContent !== null) {
      parsed = JSON.parse(cartStoreContent);
      parsed.map((item) => arr.push(item));
    }

    if (!arr.some((item) => item.id === id)) {
      arr.push(item);
    }

    localStorage.setItem("shop:cart", JSON.stringify(arr));
    resolve(arr);
  });
};

export const removeFromCart = async (id: number): Promise<CartInterface[]> => {
  return new Promise(function (resolve) {
    const loaded = loadCartStorage();
    const arr = loaded.filter((item) => item.id !== id);
    localStorage.setItem("shop:cart", JSON.stringify(arr));

    resolve(arr);
  });
};

export const updateCartStorage = async (
  id: number,
  quantity: string
): Promise<CartInterface[]> => {
  const loaded = loadCartStorage();
  const arr = loaded.find((item) => item.id === id);
  if (!arr) return loaded;
  arr.quantity = quantity;
  localStorage.setItem("shop:cart", JSON.stringify(loaded));
  return loaded;
};

export const resetCartStorage = async (): Promise<[]> => {
  localStorage.removeItem("shop:cart");
  return [];
};

export const loadCartStorage = (): CartInterface[] => {
  const storedContent = localStorage.getItem("shop:cart");
  return storedContent === null ? [] : JSON.parse(storedContent);
};
