// import { Outlet } from "react-router-dom";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import SignIn from "../AuthPage/SignIn";
// import Feed from "../Feed";
// import Header from "../../components/Header";
//import NotFound from "../NotFound";

import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
// import Feed from "../Feed";
// import UserPage from "../UserPage";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
