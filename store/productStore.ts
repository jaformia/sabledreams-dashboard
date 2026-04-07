import type { Product } from "@/types/product";
import { createCollectionState, type CollectionState } from "@/store/createStore";

export type ProductState = CollectionState<Product>;

export const productStore: ProductState = createCollectionState<Product>();
