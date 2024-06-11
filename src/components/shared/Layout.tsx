import React from "react";
import { Outlet } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";
type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="flex">
      <SideBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </div>
  );
};

export default Layout;
