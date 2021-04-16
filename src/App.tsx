import AddOrderForm from "./AddOrderForm";
import "./App.css";
import { useGetOrdersQuery, useCreateOrderMutation } from "./generated/graphql";
import OrderSummary from "./OrderSummary";

function App() {
  const [createOrder, { data: dataCreateOrder }] = useCreateOrderMutation();

  const { data, error, loading } = useGetOrdersQuery();

  return (
    <div className="App">
      <h1>Order App</h1>
      <AddOrderForm />

      {data?.orderList?.map((order) => {
        return order && <OrderSummary order={order} />;
      })}
    </div>
  );
}

export default App;
