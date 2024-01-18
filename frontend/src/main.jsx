import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShoppingCartProvider } from "./components/contexts/ShoppingCartContext.jsx";
import { AuthContextProvider } from "./components/contexts/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
