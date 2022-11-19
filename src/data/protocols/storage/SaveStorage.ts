export interface SaveStorage<T> {
  execute(key: string | string[], item: T): Promise<void>;
}
