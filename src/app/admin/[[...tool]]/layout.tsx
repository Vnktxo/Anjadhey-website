"use client";

// This layout is part of the client-side Studio, so it must be a Client Component.
// It simply renders the page content.

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
