"use client";
import { useEffect, useState } from "react";

export default function HydrationSafe({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Only show children after hydration
    setHasMounted(true);
    // Optional: Remove vscode class
    document.body.classList.remove("vsc-initialized");
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
}