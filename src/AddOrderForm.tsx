import { FormApi } from "final-form";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import { useCreateOrderMutation } from "./generated/graphql";

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
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Simple Default Input</h2>
              <div>
                <label>Order Name</label>
                <Field
                  name="orderName"
                  component="input"
                  placeholder="Order Name"
                  data-cy="orderNameInput"
                />
              </div>
              <div>
                <label>Order Price</label>
                <Field
                  name="orderPrice"
                  component="input"
                  placeholder="Order Price"
                  type="number"
                  data-cy="orderPriceInput"
                />
              </div>

              <button type="submit" data-cy="submitButton">
                Submit
              </button>
            </form>
          )}
        />
      )}
    </div>
  );
};

export default AddOrderForm;
