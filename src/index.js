import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyContextProvider from "./Context/contextProvider";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </MyContextProvider>
);
