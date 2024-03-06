import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./AuthPage";
import Feed from "./Feed";
import ProtectedRoutes from "./ProtectedRoutes";


import UserEditPage from "../components/UserEditPage";
import UserProfilePage from "../components/UserProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/feed" element={<Feed />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/logout" element={<NotFound />} />
        <Route path="/user/me" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
