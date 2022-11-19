import { RemoveStorage } from "../../data/protocols/storage/RemoveStorage";

export class RemoveSessionStorage implements RemoveStorage {
  async execute(key: string | string[]): Promise<void> {
    if (typeof key === "string") {
      sessionStorage.removeItem(key);
    } else {
      const map = JSON.parse(sessionStorage.getItem(key[0]) || "{}");

      let parent = map;
      for (let i = 1; i < key.length - 1; i++) {
        parent = parent[key[i]];
      }
      if (key.length > 0) {
        delete parent[key[key.length - 1]];
      }
      sessionStorage.setItem(key[0], JSON.stringify(map));
    }
  }
}
