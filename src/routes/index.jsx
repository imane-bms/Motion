import { BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./AuthPage/SignIn";
import SignUp from "./AuthPage/SignUp"
import Login from "./AuthPage"



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
          {/* <Route path="/shop" element={<Shop />} /> */}

        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;