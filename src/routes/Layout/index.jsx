// import { Outlet } from "react-router-dom";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
//import SignIn from "../AuthPage/SignIn";
//import SignUp from "../AuthPage/SignUp";
//import Feed from "../Feed";
import Login from "../AuthPage"


// import UserPage from "../UserPage";


function Layout() {
  return (
    <>
      {/* <Header/> */}
      <main>
        <Login/>
        
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
