"use client";

import { OrderStateProvider } from "@/contexts/OrderContext";
import { Orders } from "../components";

export default function Home() {
  return (
    <OrderStateProvider>
      <Orders />
    </OrderStateProvider>
  );
}
