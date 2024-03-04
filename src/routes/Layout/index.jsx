import { Outlet } from "react-router-dom";
import Header from "../../../../../Week 3/day-4-online-shop/src/components/Header/Header";
import Footer from "../../../../../Week 3/day-4-online-shop/src/components/Footer/Footer";


function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
