import React from "react";
import AppNavbarTab from "./AppNavbarTab";

const AppNavbarTabs = () => {
  return (
    <div className="navbar-tabs">
      <AppNavbarTab value="Home" />
      <AppNavbarTab value="About" />
    </div>
  );
};

export default AppNavbarTabs;
