import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import UserInfo from "../components/UserInfo";
// import UserEdit from "../components/UserEdit";
import Feed from "./Feed";
import SignIn from "./AuthPage/SignIn";

import UserEditPage from "../components/UserEditPage";
import UserProfilePage from "../components/UserProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="user/me" element={<UserProfilePage />} />
          <Route path="user/me/edit" element={<UserEditPage />} />

          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* protected route */}

          {/* <Route path="user/me" element={<UserInfo />} /> */}
          {/* <Route path="user/me/edit" element={<UserEdit />} /> */}

          <Route path="user/me/posts" element={<Feed />} />
          <Route path="user/:userID" element={<UserInfo />} />
          {/* protected route */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
