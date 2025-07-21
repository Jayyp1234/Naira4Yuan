import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/tailwind.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./states/services/store";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
