import { type SchemaTypeDefinition } from "sanity";

import gallery from "./gallery";
import service from "./services";
import promotion from "./blogPost";
import booking from "./booking";
import workingHours from "./workingHours";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, service, promotion, booking, workingHours],
};
