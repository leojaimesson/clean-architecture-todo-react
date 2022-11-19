export interface RetrieveStorage<T> {
  execute(key: string): Promise<T>;
}
