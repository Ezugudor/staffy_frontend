"use client";

import { Orders } from "@/components";
import { OrderStateProvider } from "@/contexts/OrderContext";

export default function Home() {
  return (
    <OrderStateProvider>
      <Orders />
    </OrderStateProvider>
  );
}
