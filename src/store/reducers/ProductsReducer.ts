import {
  ProductsAction,
  FeaturedState,
  initialProductsState,
  ProductState,
  SingleProductAction,
  initialProductState,
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

export const SingleProductReducer = (
  state: ProductState,
  action: SingleProductAction
): ProductState => {
  switch (action.type) {
    case "REQUEST_PRODUCT":
      return {
        product: initialProductState,
        loading: true,
        error: "",
      };
    case "SUCCESS_PRODUCT":
      return {
        product: action.payload,
        loading: false,
        error: "",
      };
    case "FAILED_PRODUCT":
      return {
        product: initialProductState,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
