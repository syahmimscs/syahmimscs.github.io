"use client";
import { useEffect } from "react";

export default function BodyClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove vscode class after mount if needed
    document.body.classList.remove("vsc-initialized");
  }, []);

  return <>{children}</>;
}