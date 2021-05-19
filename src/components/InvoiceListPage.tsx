import React from "react";
import { InvoiceStatus, useGetInvoicesQuery } from "../generated/graphql";
import InvoiceSummary from "./InvoiceSummary";

export const InvoiceListPage = () => {
  const { data, error, loading } = useGetInvoicesQuery({
    variables: { filter: { invoiceStatus: InvoiceStatus.ApprovalRequested } },
  });
  return (
    <div>
      {data?.invoiceList?.map((invoice) => {
        return invoice && <InvoiceSummary invoice={invoice} />;
      })}
    </div>
  );
};
