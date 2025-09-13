// This entire layout is part of the client-side Sanity Studio application
"use client";

import { metadata, viewport } from "next-sanity/studio";

export { metadata, viewport };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
