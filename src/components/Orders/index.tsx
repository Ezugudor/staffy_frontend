import { FC, useContext } from "react";
// import { Filter } from "./Filter";

import { Page, Button, AppProvider } from "@shopify/polaris";
import React from "react";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import { OrderTable } from "./OrderTable/OrderTable";
import { OrderContext } from "@/contexts/OrderContext";

interface OrdersProps {}

export const Orders: FC<OrdersProps> = ({}) => {
  const { refreshOrders } = useContext(OrderContext);

  return (
    <AppProvider i18n={en}>
      <Page
        title="General"
        primaryAction={
          <Button variant="primary" onClick={refreshOrders}>
            Refresh
          </Button>
        }
      >
        {/* <Filter /> */}
        <OrderTable />
      </Page>
    </AppProvider>
  );
};
