import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
// import { link } from "./users/schema";

const client: any = new ApolloClient({
  // uri: "https://flyby-router-demo.herokuapp.com/",       //locations
  // uri: "https://71z1g.sse.codesandbox.io/",       //dogs
  // link: link,                                  //suspense dogs
  uri: "https://sxewr.sse.codesandbox.io/",
  cache: new InMemoryCache(),
  // defaultOptions: {
  //   watchQuery: {
  //     nextFetchPolicy: 'cache-only',      //used for chaching after first request
  //   },
  // },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
