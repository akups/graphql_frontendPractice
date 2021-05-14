import AddInvoiceForm from "./AddInvoiceForm";
import "./App.css";
import {
  useGetInvoicesQuery,
  useCreateInvoiceMutation,
  InvoiceStatus,
} from "./generated/graphql";
import InvoiceSummary from "./InvoiceSummary";

function App() {
  const [
    createInvoice,
    { data: dataCreateInvoice },
  ] = useCreateInvoiceMutation();

  const { data, error, loading } = useGetInvoicesQuery({
    variables: { filter: { invoiceStatus: InvoiceStatus.ApprovalRequested } },
  });
  console.log(error);
  console.log(data);

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
