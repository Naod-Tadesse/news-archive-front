import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-neutral-800 h-screen">
      <Navbar />
      <div>
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default Layout;
