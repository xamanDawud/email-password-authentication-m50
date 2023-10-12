import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
