import { css } from "@emotion/css";
import React from "react";
import { Invoice } from "../generated/graphql";
import { UploadFile } from "./UploadFile";

const color = "white";

export default function InvoiceSummary({ invoice }: { invoice: Invoice }) {
  return (
    <div
      className={css`
        background-color: #f6a192;
        flex-direction: column;
        align-items:center
        border-radius: 4px;
        width: 20%;
        display: flex;
        margin: 5px;
        padding-left: 10rem;
        padding-right: 0.5rem;
        &:hover {
          color: ${color};
        }
        .p{
          size: 20px
        }
      `}
    >
      <p>Name: {invoice?.name}</p>
      <p>Net Price:{invoice?.netPrice}</p>
      <p>Total Price: {invoice?.totalPrice}</p>
      <p>Date Created: {invoice?.createdAt}</p>
      <p>Status: {invoice?.invoiceStatus}</p>
      <UploadFile invoiceId={invoice.id} />
      <p>{invoice?.isCancelled}</p>
    </div>
  );
}
