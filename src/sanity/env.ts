export const apiVersion = process.env.SANITY_API_VERSION || "2024-11-01";

export const dataset =
  process.env.SANITY_DATASET ||
  (() => {
    throw new Error("Missing environment variable: SANITY_DATASET");
  })();

export const projectId =
  process.env.SANITY_PROJECT_ID ||
  (() => {
    throw new Error("Missing environment variable: SANITY_PROJECT_ID");
  })();

export const apiToken =
  process.env.SANITY_API_TOKEN ||
  (() => {
    throw new Error("Missing environment variable: SANITY_API_TOKEN");
  })();
