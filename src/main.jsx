import React from "react";
import "primereact/resources/themes/soho-dark/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ReactDOM from "react-dom/client";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "../node_modules/primeflex/primeflex.css";
import App from "./App.jsx";
//import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
