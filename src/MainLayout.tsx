import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "./Medium-components/SideBar";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="h-screen sticky top-0 hidden sm:block ">
        <SideBar />
      </div>
      <div className="bg-gray-200 py-16 px-12 grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
