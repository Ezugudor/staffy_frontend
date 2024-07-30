import { IOrders } from "@/types/Orders.types";

const orderList: IOrders[] = [
  {
    id: "1",
    order_date: "2011-11-11",
    customer_name: "Nelson",
    attributed_staff_name: "Joe",
    total: 100,
    commission_in_dollars: 100,
  },
  {
    id: "2",
    order_date: "2011-11-11",
    customer_name: "Nelson",
    attributed_staff_name: "Joe",
    total: 100,
    commission_in_dollars: 100,
  },
];

export const getAllOrders = (): Promise<IOrders[]> => {
  return new Promise((resolve, rejects) => {
    resolve(orderList);
  });
};
