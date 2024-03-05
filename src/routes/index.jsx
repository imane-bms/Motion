import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";

import UserInfo from "../components/UserInfo";
import UserEdit from "../components/UserEdit";
import Feed from "./Feed";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* protected route */}
          <Route path="user/me" element={<UserInfo />} />
          <Route path="user/me/edit" element={<UserEdit />} />
          <Route path="user/me/posts" element={<Feed />} />
          {/* protected route */}
          <Route path="user/:userID" element={<UserInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
