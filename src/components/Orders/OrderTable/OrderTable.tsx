import { IOrders } from "@/types/Orders.types";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "@/contexts/OrderContext";
import { IndexTable, useIndexResourceState } from "@shopify/polaris";
import React from "react";
import { OrderList } from "../OrderList";

export const OrderTable = () => {
  const [filteredOrders, setFilteredOrders] = useState<IOrders[] | null>(null);
  const { activeFilter, orders } = useContext(OrderContext);

  useEffect(() => {
    const filteredOrd = !activeFilter
      ? orders
      : orders.filter((order) => order.id === activeFilter);
    setFilteredOrders(filteredOrd);
  }, [activeFilter]);

  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState((filteredOrders || orders) as any);

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={orders.length}
      selectedItemsCount={
        allResourcesSelected ? "All" : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      headings={[
        { title: "Id" },
        { title: "Date" },
        { title: "Customer Name" },
        { title: "Total", alignment: "end" },
        { title: "Staff Name" },
        { title: "Commission ($)" },
      ]}
    >
      {orders.map((order, index) => {
        const { id } = order;
        return (
          <IndexTable.Row
            id={id}
            key={id}
            selected={selectedResources.includes(id)}
            position={index}
          >
            <OrderList order={order} />
          </IndexTable.Row>
        );
      })}
    </IndexTable>
  );
};
