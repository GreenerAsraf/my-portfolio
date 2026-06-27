"use client";

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
