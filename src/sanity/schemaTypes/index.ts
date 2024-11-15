import { type SchemaTypeDefinition } from "sanity";

import gallery from "./gallery";
import service from "./services";
import promotion from "./blogPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, service, promotion],
};
