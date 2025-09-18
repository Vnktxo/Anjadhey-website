// src/app/admin/[[...tool]]/Studio.tsx
"use client";

import React, { useEffect, useState } from "react";

/**
 * This component dynamically imports your actual Sanity Studio entry.
 * Replace the dynamic import path below with the path to the module that
 * exports your Studio React component (commonly something like
 * "../../../sanity/studio" or "../../../../../studio/entry" depending on layout).
 *
 * The dynamic import inside useEffect ensures the import runs only in the browser.
 */
export default function StudioLoader() {
  const [Studio, setStudio] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // <-- ADJUST THIS PATH to the module that exports your Sanity Studio React component
        // e.g. import("../../../../sanity/studio") or import("../../../studio") depending on your repo
        // @ts-ignore - dynamic runtime import path may not exist at compile time
        const mod = await import("../../../sanity/studio");
        // Support default export or named export (adjust if your module uses a different name)
        const StudioComp = mod.default ?? mod.Studio ?? mod.SanityStudio;
        if (mounted) setStudio(() => StudioComp);
      } catch (err) {
        // Keep this helpful message so you see any runtime import errors in the browser console
        // (these errors are easier to debug than build-time TS errors)
        // eslint-disable-next-line no-console
        console.error("Failed to load Studio module:", err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (!Studio) {
    return <div style={{ padding: 24 }}>Loading Studio…</div>;
  }

  const StudioComponent = Studio;
  return (
    <div style={{ minHeight: "100vh" }}>
      <StudioComponent />
    </div>
  );
}
