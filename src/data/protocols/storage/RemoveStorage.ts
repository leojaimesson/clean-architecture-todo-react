export interface RemoveStorage {
  execute(key: string | string[]): Promise<void>;
}
