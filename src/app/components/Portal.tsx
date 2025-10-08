"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector?: string;
}

const Portal = ({ children, selector = "#portal-root" }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const selectorElement = document.querySelector(selector);
    if (!selectorElement) {
      // If the selector doesn't exist, we can't mount the portal
      return;
    }
    ref.current = selectorElement;
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;