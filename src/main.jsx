import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./styles/index.js";
import { ThemeProvider } from "styled-components";
import store from "./store"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
  </Provider>
);
