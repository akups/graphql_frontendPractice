import AddInvoiceForm from "./AddInvoiceForm";
import "./App.css";
import {
  useGetInvoicesQuery,
  useCreateInvoiceMutation,
} from "./generated/graphql";
import InvoiceSummary from "./InvoiceSummary";

function App() {
  const [
    createInvoice,
    { data: dataCreateInvoice },
  ] = useCreateInvoiceMutation();

  const { data, error, loading } = useGetInvoicesQuery();

  return (
    <div className="App">
      <h1>Invoice App</h1>
      <AddInvoiceForm />

      {data?.invoiceList?.map((invoice) => {
        return invoice && <InvoiceSummary invoice={invoice} />;
      })}
    </div>
  );
}

export default App;
