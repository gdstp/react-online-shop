export const REQUEST_FEATURED = "REQUEST_FEATURED";
export const SUCCESS_FEATURED = "SUCCESS_FEATURED";
export const FAILED_FEATURED = "FAILED_FEATURED";

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
