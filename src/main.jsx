import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store";

import { theme } from "./styles/index.js";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
