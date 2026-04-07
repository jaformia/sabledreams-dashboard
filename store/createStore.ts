export type CollectionState<T> = {
  list: T[];
};

export function createStoreState<T extends object>(initialState: T): T {
  return { ...initialState };
}

export function createCollectionState<T>(): CollectionState<T> {
  return createStoreState({ list: [] as T[] });
}
