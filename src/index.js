
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./library/breakpoints";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme} >
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
