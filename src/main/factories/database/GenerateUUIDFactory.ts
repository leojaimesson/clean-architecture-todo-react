import { UUIDGenerator } from "../../../data/protocols/database/UUIDGenerator";
import { GenarateUUID } from "../../../infra/database/GenarateUUID";

export function makeGenerateUUIDFactory(): UUIDGenerator {
  return new GenarateUUID();
}
