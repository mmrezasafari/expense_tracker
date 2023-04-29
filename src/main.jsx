import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./database/pouchdb";
import { AccountProvider } from "./provider/AccountProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>
);
