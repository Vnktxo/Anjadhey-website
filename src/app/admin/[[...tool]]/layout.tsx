// This is a new file that handles the metadata for the Sanity Studio
import { metadata, viewport } from "next-sanity/studio";

export { metadata, viewport };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
