import { IOrders } from "@/types/Orders.types";
import { FC, useContext, useEffect, useState } from "react";
import { OrderContext } from "@/contexts/OrderContext";
import {
  IndexTable,
  useIndexResourceState,
  Text,
  Badge,
} from "@shopify/polaris";

import React from "react";

// const orders2 = [
//   {
//     id: "1020",
//     order: "#1020",
//     date: "Jul 20 at 4:34pm",
//     customer: "Jaydon Stanton",
//     total: "$969.44",
//     paymentStatus: <Badge progress="complete">Paid</Badge>,
//     fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
//   },
// ];

interface OrderListProps {
  order: IOrders;
}

export const OrderList: FC<OrderListProps> = ({ order }) => {
  const {
    id,
    total,
    attributed_staff_name,
    commission_in_dollars,
    customer_name,
    order_date,
  } = order;

  return (
    <>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {id}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{order_date}</IndexTable.Cell>
      <IndexTable.Cell>{customer_name}</IndexTable.Cell>
      <IndexTable.Cell>
        <Text as="span" alignment="end" numeric>
          {total}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{attributed_staff_name}</IndexTable.Cell>
      <IndexTable.Cell>{commission_in_dollars}</IndexTable.Cell>
    </>
  );
};
