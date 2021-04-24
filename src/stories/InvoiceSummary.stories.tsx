import React from "react";
import InvoiceSummary from "../InvoiceSummary";

export const Invoice = () => {
  return (
    <InvoiceSummary
      invoice={{
        id: "test",
        netPrice: 54.4,
        totalPrice: 34,
        name: "test name",
      }}
    ></InvoiceSummary>
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
  title: "InvoiceSummary",
  component: InvoiceSummary,
};
