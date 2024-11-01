import { type SchemaTypeDefinition } from "sanity";

import gallery from "./gallery";
import service from "./services";
import promotion from "./promotions";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, service, promotion],
};
