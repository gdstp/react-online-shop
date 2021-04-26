import {
  ProductsAction,
  FeaturedState,
  initialProductsState,
} from "store/types/ProductsType";

export const ProductsReducer = (
  state: FeaturedState,
  action: ProductsAction
): FeaturedState => {
  switch (action.type) {
    case "REQUEST_FEATURED":
      return {
        products: initialProductsState,
        loading: true,
        error: "",
      };
    case "SUCCESS_FEATURED":
      return {
        products: action.payload,
        loading: false,
        error: "",
      };
    case "FAILED_FEATURED":
      return {
        products: initialProductsState,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
