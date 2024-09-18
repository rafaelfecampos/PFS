import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const elemento = document.getElementById("root");

const root = ReactDOM.createRoot(elemento);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)