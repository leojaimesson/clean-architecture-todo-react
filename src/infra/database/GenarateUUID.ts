import { v4 as uuidv4 } from "uuid";
import { UUIDGenerator } from "../../data/protocols/database/UUIDGenerator";

export class GenarateUUID implements UUIDGenerator {
  execute(): string {
    return uuidv4();
  }
}
