import { FormApi } from "final-form";
import { Form, Field } from "react-final-form";
import { useCreateOrderMutation } from "./generated/graphql";

const AddOrderForm = () => {
  const [createOrder, { data: dataCreateOrder }] = useCreateOrderMutation();
  const onSubmit = async (values: any, form: FormApi) => {
    const formattedPrice = parseFloat(values.orderPrice);
    await createOrder({
      variables: {
        input: { name: values.orderName, price: formattedPrice },
      },
    });
  };

  return (
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
            />
          </div>
          <div>
            <label>Order Price</label>
            <Field
              name="orderPrice"
              component="input"
              placeholder="Order Price"
              type="number"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

export default AddOrderForm;
