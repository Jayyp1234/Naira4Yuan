import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/tailwind.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./states/services/store";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // 	<BrowserRouter>
  // 		<App />
  // 	</BrowserRouter>
  // </StrictMode>
  <StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
