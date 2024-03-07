import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Login from "./AuthPage";
import Feed from "./Feed";
import ProtectedRoutes from "./ProtectedRoutes";
import UserProfilePage from "./UserProfilePage";
import UserEditPage from "./UserEditPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="feed" element={<Feed />} />
            <Route path="user/edit" element={<UserEditPage />} />
            <Route path="user/:userID" element={<UserProfilePage />} />
            <Route path="user/me" element={<UserProfilePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
