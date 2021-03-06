import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

let uri = "http://localhost:4000/graphql";

const client = new ApolloClient({
  link: createUploadLink({
    uri:
      process.env.NODE_ENV === "development"
        ? uri
        : "https://thawing-sands-35319.herokuapp.com/graphql",
  }),

  cache: new InMemoryCache(),
});

Sentry.init({
  dsn:
    "https://60cef1b16b324ad3bffa3cd75f174f2a@o554754.ingest.sentry.io/5683721",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
