import { SaveStorage } from "../../data/protocols/storage/SaveStorage";

export class SaveSessionStorage<T> implements SaveStorage<T> {
  async execute(key: string | string[], item: T): Promise<void> {
    if (typeof key === "string") {
      sessionStorage.setItem(key, JSON.stringify(item));
    } else {
      const map = JSON.parse(sessionStorage.getItem(key[0]) || "{}");

      let parent = map;
      for (let i = 1; i < key.length - 1; i++) {
        parent = parent[key[i]];
      }
      if (key.length > 0) {
        parent[key[key.length - 1]] = item;
      }
      sessionStorage.setItem(key[0], JSON.stringify(map));
    }
  }
}
