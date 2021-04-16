import React from "react";
import OrderSummary from "../OrderSummary";

export const Order = () => {
  return (
    <OrderSummary
      order={{
        id: "test",
        netPrice: 54.4,
        totalPrice: 34,
        name: "test name",
      }}
    ></OrderSummary>
  );
};

/*
const Template = (args: any) => <Order order={args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "test",
  netPrice: "Primary",
};
*/

export default {
  title: "OrderSummary",
  component: OrderSummary,
};
