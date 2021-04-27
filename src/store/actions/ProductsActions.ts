import api from "services/api";
import { Products } from "store/types/ProductsType";

export const getFeaturedProducts = async (
  category?: string
): Promise<Products[]> => {
  const cat = category === undefined ? "" : `/category/${category}`;
  const resp = await api.get(`/products${cat}?limit=4`);
  return resp.data;
};

export const getCategoryItems = async (
  category: string
): Promise<Products[]> => {
  const resp = await api.get(`/products/category/${category}`);
  return resp.data;
};

export const getSingleItem = async (itemId: number): Promise<Products> => {
  const resp = await api.get(`/products/${itemId}`);
  if (resp.data.length === 0) {
    Promise.reject("failed");
  }
  return resp.data;
};
