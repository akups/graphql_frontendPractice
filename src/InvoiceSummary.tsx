import { css } from "@emotion/css";
import React from "react";
import { Invoice } from "./generated/graphql";

const color = "white";

export default function InvoiceSummary({ invoice }: { invoice: Invoice }) {
  return (
    <div
      className={css`
        background-color: hotpink;
        flex-direction: row;
        border-radius: 4px;
        width: calc(100% - 10px);
        display: flex;
        margin: 5px;
        padding-left: 5px;
        padding-right: 5px;
        &:hover {
          color: ${color};
        }
      `}
    >
      <p>Name: {invoice?.name}</p>
      <p>Net Price:{invoice?.netPrice}</p>
      <p>Total Price: {invoice?.totalPrice}</p>
      <p>{invoice?.createdAt}</p>
      <p>{invoice?.invoiceStatus}</p>
      <p>{invoice?.isCancelled}</p>
    </div>
  );
}
