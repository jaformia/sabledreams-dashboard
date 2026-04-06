import type { Product } from "@/types/product";

export type ProductState = {
  list: Product[];
};

export const productStore: ProductState = {
  list: [],
};
