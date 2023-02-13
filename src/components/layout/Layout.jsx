import React from "react";
import TinderCards from "../../TinderCards";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Link />
    </>
  );
};

export default Layout;
