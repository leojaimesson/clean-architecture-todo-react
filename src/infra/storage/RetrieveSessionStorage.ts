import { RetrieveStorage } from "../../data/protocols/storage/RetrieveStorage";

export class RetrieveSessionStorage<T> implements RetrieveStorage<T> {
  execute(key: string): Promise<T> {
    return Promise.resolve(JSON.parse(sessionStorage.getItem(key) || '{}'));
  }
}