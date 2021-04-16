import React from "react";
import { css, cx } from "@emotion/css";
import { Order } from "./generated/graphql";

const color = "white";

export default function OrderSummary({ order }: { order: Order }) {
  return (
    <div
      className={css`
        background-color: hotpink;
        flex-direction: column;
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
      <p>Name: {order?.name}</p>
      <p>Net Price:{order?.netPrice}</p>
      <p>Total Price: {order?.totalPrice}</p>
      <p>{order?.createdAt}</p>
      <p>{order?.status}</p>
      <p>{order?.isCancelled}</p>
    </div>
  );
}
