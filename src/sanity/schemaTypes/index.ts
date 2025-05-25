import { type SchemaTypeDefinition } from "sanity";

import gallery from "./gallery";
import service from "./services";
import promotion from "./blogPost";
import booking from "./booking";
import workingHours from "./workingHours";
import flashPromo from "./flashPromo";
import siteAlert from "./siteAlert";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, service, flashPromo, promotion, booking, workingHours, siteAlert],
};
