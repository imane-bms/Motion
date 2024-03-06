import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./AuthPage";
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
        <Route element={<ProtectedRoutes />}>

        <Route path="/feed" element={<Feed />} />
        
        <Route path="/user/me" element={<UserProfilePage />} />
        <Route path="*" element={<NotFound />} /> 
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
