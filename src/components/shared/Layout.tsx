import { Outlet } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="lg:flex">
      <SideBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </div>
  );
};

export default Layout;
