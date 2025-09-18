// src/app/admin/[[...tool]]/page.tsx
import dynamic from "next/dynamic";
import React from "react";

// Load the client-only Studio loader. Turn off SSR so Next doesn't try to server-render Studio code.
const Studio = dynamic(() => import("./studio"), {
  ssr: false,
  loading: () => <div style={{ padding: 24 }}>Loading admin…</div>,
});

export default function AdminPage() {
  return (
    <main>
      <Studio />
    </main>
  );
}
