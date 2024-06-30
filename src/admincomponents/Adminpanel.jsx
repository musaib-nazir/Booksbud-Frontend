import React from "react";
import { isAuthenticatedadmin } from "../features";
import Sidebar from "../maincomponent/Items/Utilities/Sidebar";

import "../maincomponent/Items/Utilities/sidebar.scss"
import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./styles/adminpanel.scss"

const Adminpanel = () => {
  isAuthenticatedadmin();
  // const location = useLocation();
  // const isadminPanel = location.pathname === "/admin";

  return (
    <>
      <Sidebar/>
    
      <Outlet />
    </>
  );
};

export default Adminpanel;
