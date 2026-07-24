"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MouseParticles = dynamic(() => import("react-mouse-particles"), {
  ssr: false,
  loading: () => null,
});

const MessengerCustomerChat = dynamic(
  () => import("react-messenger-customer-chat"),
  { ssr: false, loading: () => null }
);

export default function ClientEffects() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(enable, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <>
      <MouseParticles
        g={1}
        num={6}
        color="random"
        cull="stats,image-wrapper"
        level={6}
      />
      <MessengerCustomerChat pageId="106794868255134" appId="620513202238912" />
    </>
  );
}
