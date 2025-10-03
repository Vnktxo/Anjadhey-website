"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  images: string[]; // public/ paths, e.g. ["/ki1.jpg", "/ki2.jpg"]
  interval?: number; // ms
  className?: string;
}

export default function MobileBgCarousel({
  images,
  interval = 3000,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }} // behind content
    >
      {images.map((src, i) => (
        <div
          key={src + i}
          className="absolute inset-0 transition-opacity duration-800 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw"
            className="object-cover object-center"
            priority={i === 0}
          />
          {/* dark overlay to keep text readable on top of images */}
          <div className="absolute inset-0 bg-black/28" />
        </div>
      ))}
    </div>
  );
}
