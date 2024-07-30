import { getAllOrders } from "@/api/orders";
import { OrderFilterTypes } from "@/types/OrderFilterTypes.types";
import { IOrders } from "@/types/Orders.types";

import React, { useEffect } from "react";
import { FC, createContext, useState } from "react";

interface OrderStateProviderProps {
  children: any;
}

export interface OrderProps {
  orders: IOrders[];
  refreshOrders: () => void;
  activeFilter: OrderFilterTypes | null;
  setActiveFilter: (category: OrderFilterTypes | null) => void;
}

//@ts-ignore
const OrderContext = createContext<OrderProps>();

const OrderStateProvider: FC<OrderStateProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [activeFilter, setActiveFilter] = useState<OrderFilterTypes | null>(
    null
  );

  useEffect(() => {
    (async () => {
      await fetchOrders();
    })();
  }, []);

  const fetchOrders = async () => {
    const orders = await getAllOrders();
    setOrders(orders);
  };

  const handleFilterSelect = (category: OrderFilterTypes | null) => {
    setActiveFilter(category);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        refreshOrders: fetchOrders,
        activeFilter,
        setActiveFilter: handleFilterSelect,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderStateProvider };
