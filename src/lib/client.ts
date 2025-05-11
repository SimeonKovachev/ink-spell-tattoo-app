import { createClient } from "next-sanity";
import { apiToken, apiVersion, dataset, projectId } from "../sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: apiToken,
});
