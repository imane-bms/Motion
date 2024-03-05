// import { Outlet } from "react-router-dom";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import SignIn from "../AuthPage/SignIn";
// import Feed from "../Feed";


function Layout() {
  return (
    <>
      {/* <Header/> */}
      <main>
        <SignIn />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
