import AddOrderForm from "./AddOrderForm";
import "./App.css";
import { useGetOrdersQuery, useCreateOrderMutation } from "./generated/graphql";

function App() {
  const [createOrder, { data: dataCreateOrder }] = useCreateOrderMutation();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = parseInt(e.target.price.value);

    createOrder({ variables: { input: { name, price } } });
  };

  const { data, error, loading } = useGetOrdersQuery();
  console.log(data);
  throw new Error("random error");
  return (
    <div className="App">
      <AddOrderForm />
      <div>
        <form onSubmit={handleSubmit}>
          <input name="name" />
          <input type="number" name="price" />
          <button type="submit">submit</button>
        </form>
      </div>
      {data?.orderList?.map((order) => {
        return (
          <div>
            <p>{order?.name}</p>
            <p>{order?.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
