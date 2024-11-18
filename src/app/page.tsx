"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.location.href = "/login";
  });

  return null;
}
