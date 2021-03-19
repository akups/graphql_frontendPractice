import { FormApi } from "final-form";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import { useCreateOrderMutation } from "./generated/graphql";
import styled from "styled-components";

const AddOrderForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [createOrder, { data: dataCreateOrder }] = useCreateOrderMutation();
  const onSubmit = async (values: any, form: FormApi) => {
    const formattedPrice = parseFloat(values.orderPrice);
    await createOrder({
      variables: {
        input: { name: values.orderName, price: formattedPrice },
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
            if (!values.orderPrice) {
              errors.orderPrice = "Price is required";
            }
            if (!values.orderName) {
              errors.orderName = "Order name is required";
            }
            if (values.orderName && values.orderName.length < 5) {
              errors.orderName = "Order name must be longer than 5 characters";
            }
            return errors;
          }}
          render={({ handleSubmit }) => (
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <h2>Simple Default Input</h2>
                <div>
                  <Field name="orderName">
                    {({ input, meta }) => (
                      <InputContainer>
                        <label>Order Name:</label>
                        <InputField
                          {...input}
                          type="text"
                          placeholder="first order"
                          data-cy="orderNameInput"
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
                  <Field name="orderPrice">
                    {({ input, meta }) => (
                      <InputContainer>
                        <label>Order Price:</label>
                        <InputField
                          {...input}
                          type="number"
                          placeholder="300"
                          data-cy="orderPriceInput"
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

export default AddOrderForm;
