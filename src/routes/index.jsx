import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./AuthPage";
import Feed from "./Feed";
import ProtectedRoutes from "./ProtectedRoutes";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/feed" element={<Feed />} />
        </Route>
        
          {/* <Route path="/shop" element={<Shop />} /> */}

        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;