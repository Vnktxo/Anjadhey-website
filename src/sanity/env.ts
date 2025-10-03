function assertValue<T>(v: T | undefined, errorMessage: string, fallback?: T): T {
  if (v === undefined || v === null || v === "") {
    if (fallback !== undefined) {
      console.warn(errorMessage, `→ using fallback: ${fallback}`);
      return fallback;
    }
    throw new Error(errorMessage);
  }
  return v;
}

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
  "production" // ✅ fallback for safety
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
  "sueps2qg" // ✅ fallback for safety
);
