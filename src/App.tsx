import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import AddInvoiceForm from "./components/AddInvoiceForm";
import { InvoiceListPage } from "./components/InvoiceListPage";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <div>
        <NavToolbar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/invoices">Invoices</Link>
            </li>
          </ul>
        </NavToolbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <p>Akua's Invoice App</p>
          </Route>
          <Route path="/invoices">
            <InvoiceListPage />
          </Route>
          <Route path="/">
            <AddInvoiceForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const NavToolbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  size: 10rem;
  text-decoration: none;
`;
