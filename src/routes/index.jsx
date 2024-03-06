import { BrowserRouter, Route, Routes} from "react-router-dom";
//import SignIn from "./AuthPage";
import SignUp from "./AuthPage/SignUp"
import Login from "./AuthPage"



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
          {/* <Route path="/shop" element={<Shop />} /> */}

        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;