import React from "react";
import { useSingleUploadMutation } from "../generated/graphql";

export const UploadFile = (props: { invoiceId: string }) => {
  const [singelUpload, { data: dataSingleUpload }] = useSingleUploadMutation();
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => singelUpload({ variables: { file, invoiceId: props.invoiceId } });

  return (
    <React.Fragment>
      <input type="file" required onChange={onChange} />
    </React.Fragment>
  );
};
