"use client";

import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number; // seconds
}

export default function GradientText({
  children,
  className = "",
  colors = ["#f5f5dc", "#ff0000", "#d4a017"],
  animationSpeed = 8,
}: GradientTextProps) {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradient ${animationSpeed}s linear infinite`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <span
      className={`inline-block align-middle ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
