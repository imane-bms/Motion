
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./global";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
);