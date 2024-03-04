// import { Outlet } from "react-router-dom";
// import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Feed from "../Feed";


function Layout() {
  return (
    <>
      {/* <Header/> */}
      <main>
        <Feed />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
