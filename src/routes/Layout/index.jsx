// import { Outlet } from "react-router-dom";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import SignIn from "../AuthPage/SignIn";
import Feed from "../Feed";

// import UserPage from "../UserPage";


function Layout() {
  return (
    <>
      {/* <Header/> */}
      <main>
        <Feed />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
