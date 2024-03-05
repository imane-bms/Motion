// import { Outlet } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import SignIn from "../AuthPage/SignIn";
// import Feed from "../Feed";
// import Header from "../../components/Header";
//import NotFound from "../NotFound";

// import UserPage from "../UserPage";

function Layout() {
  const location = useLocation();
  // check if the current route is sign in page
  const isSignInPage = location.pathname === "/signin";
  return (
    <>
      {!isSignInPage && <Header />}
      {/* <UserPage /> */}
      {/* <Header /> */}
      {/* <main><Main /></main> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
