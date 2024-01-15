import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./router/router";
import { AppProvider } from "./context-api/app-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>
);
