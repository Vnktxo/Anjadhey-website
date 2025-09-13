// This layout file is a Server Component that handles metadata for the Studio.
import { metadata, viewport } from "next-sanity/studio";

// Export metadata and viewport for the page
export { metadata, viewport };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This Server Component will render its Client Component children (the page.tsx)
  return <>{children}</>;
}
