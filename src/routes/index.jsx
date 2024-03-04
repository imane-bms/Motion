import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/shop" element={<Shop />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;