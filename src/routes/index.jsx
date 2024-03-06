import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Feed from "./Feed";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "./NotFound";
import Layout from "./Layout";


//import UserEditPage from "../components/UserEditPage";
import UserProfilePage from "../components/UserProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="user/me" element={<UserProfilePage />} />
          <Route path="user/me/posts" element={<Feed />} />
          <Route path="user/me/edit" element={<UserEditPage />} />
          <Route path="user/:userID" element={<UserProfilePage />} />

          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* protected route */}

          {/* protected route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
