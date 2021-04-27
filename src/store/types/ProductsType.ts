export const REQUEST_FEATURED = "REQUEST_FEATURED";
export const SUCCESS_FEATURED = "SUCCESS_FEATURED";
export const FAILED_FEATURED = "FAILED_FEATURED";

export const REQUEST_PRODUCT = "REQUEST_PRODUCT";
export const SUCCESS_PRODUCT = "SUCCESS_PRODUCT";
export const FAILED_PRODUCT = "FAILED_PRODUCT";

export interface Products {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface FeaturedState {
  products: Products[];
  loading: boolean;
  error: string;
}

export const initialProductsState: Products[] = [] as Products[];

export const initialFeaturedState: FeaturedState = {} as FeaturedState;

type FeaturedRequestAction = {
  type: typeof REQUEST_FEATURED;
};

type FeaturedSuccessAction = {
  type: typeof SUCCESS_FEATURED;
  payload: Products[];
};

type FeaturedFailedAction = {
  type: typeof FAILED_FEATURED;
  error: string;
};

export type ProductsAction =
  | FeaturedRequestAction
  | FeaturedSuccessAction
  | FeaturedFailedAction;

// SINGLE PRODUCT REQUEST
export interface ProductState {
  product: Products;
  loading: boolean;
  error: string;
}

export const initialProductState: Products = {} as Products;

export const initialSingleProductState: ProductState = {} as ProductState;

type ProductRequestAction = {
  type: typeof REQUEST_PRODUCT;
};

type ProductSuccessAction = {
  type: typeof SUCCESS_PRODUCT;
  payload: Products;
};

type ProductFailedAction = {
  type: typeof FAILED_PRODUCT;
  error: string;
};

export type SingleProductAction =
  | ProductRequestAction
  | ProductSuccessAction
  | ProductFailedAction;
