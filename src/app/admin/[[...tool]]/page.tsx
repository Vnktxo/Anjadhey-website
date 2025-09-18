// This is the page that will be rendered for the /admin route.
// It uses a dynamic import to load the Studio component only on the client-side.

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the Studio component with SSR turned off
const Studio = dynamic(() => import("./studio"), { ssr: false });

export default function StudioPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24 }}>Loading Studio…</div>}>
      <Studio />
    </Suspense>
  );
}
