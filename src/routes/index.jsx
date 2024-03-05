import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
