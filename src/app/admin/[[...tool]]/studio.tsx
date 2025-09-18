"use client";

// This component is the definitive solution to the build errors.
// It ensures that the Sanity Studio is only loaded on the client-side,
// preventing the Next.js server-side build from trying to parse Studio-only code.

import { NextStudio } from "next-sanity/studio";
import sanityConfig from "../../../../sanity.config";

export default function Studio() {
  return <NextStudio config={sanityConfig} />;
}
