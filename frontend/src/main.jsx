import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//root - this is the root element present in the index.html , we are displying our react app in the div component
ReactDOM.createRoot(document.getElementById("root")).render(
  //strict mode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //calling app component which is the main component of our application
//strict mode  - this protects from unsafe lifecycles, legacy API usage, and other potential issues in the application. It helps to identify problems early in the development process and encourages best practices for writing React components.
);