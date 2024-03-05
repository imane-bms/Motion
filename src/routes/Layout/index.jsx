// import { Outlet } from "react-router-dom";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import SignIn from "../AuthPage/SignIn";
// import Feed from "../Feed";
// import Header from "../../components/Header";
//import NotFound from "../NotFound";

import UserPage from "../UserPage";

function Layout() {
  return (
    <>
      <UserPage />
      <main>{/* <Main /> */}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
