import { FormApi } from "final-form";
import { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { useCreateInvoiceMutation } from "../generated/graphql";

const AddInvoiceForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [
    createInvoice,
    { data: dataCreateInvoice },
  ] = useCreateInvoiceMutation();
  const onSubmit = async (values: any, form: FormApi) => {
    const formattedPrice = parseFloat(values.invoicePrice);
    await createInvoice({
      variables: {
        input: { name: values.invoiceName, netPrice: formattedPrice },
      },
    });
    setShowSuccess(true);
  };
  if (showSuccess) {
    /** */
  }

  return (
    <div>
      {showSuccess ? (
        <div data-cy="successMessage">Form Submitted Successful</div>
      ) : (
        <Form
          onSubmit={onSubmit}
          //validate={validate}
          validate={(values) => {
            const errors: any = {};
            if (!values.invoicePrice) {
              errors.invoicePrice = "Price is required";
            }
            if (!values.invoiceName) {
              errors.invoiceName = "invoice name is required";
            }
            if (values.invoiceName && values.invoiceName.length < 5) {
              errors.invoiceName =
                "invoice name must be longer than 5 characters";
            }
            return errors;
          }}
          render={({ handleSubmit }) => (
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <h2>Simple Default Input</h2>
                <div>
                  <Field name="invoiceName">
                    {({ input, meta }) => (
                      <InputContainer>
                        <label>Invoice Name:</label>
                        <InputField
                          {...input}
                          type="text"
                          placeholder="first invoice"
                          data-cy="invoiceNameInput"
                        />
                        {meta.error && meta.touched && (
                          <ErrorText data-cy="error-message-name">
                            {meta.error}
                          </ErrorText>
                        )}
                      </InputContainer>
                    )}
                  </Field>
                </div>

                <div>
                  <Field name="invoicePrice">
                    {({ input, meta }) => (
                      <InputContainer>
                        <label>Invoice netPrice:</label>
                        <InputField
                          {...input}
                          type="number"
                          placeholder="300"
                          data-cy="invoicePriceInput"
                        />
                        {meta.error && meta.touched && (
                          <ErrorText data-cy="error-message-price">
                            {meta.error}
                          </ErrorText>
                        )}
                      </InputContainer>
                    )}
                  </Field>
                </div>

                <button type="submit" data-cy="submitButton">
                  Submit
                </button>
              </form>
            </FormContainer>
          )}
        />
      )}
    </div>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  height: 20px;
  padding-top: 5px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
`;

const ErrorText = styled.span`
  font-size: 10px;
  color: red;
`;

export default AddInvoiceForm;
