import React from "react";
import { Menubar } from "primereact/menubar";
import image from "../assets/lo.png";
import { Button } from "primereact/button";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bgImage h-screen w-full setup">
      <div className="text-white flex flex-column justify-content-center align-items-center gap-5 p-8 upper text-0">
        <p className=" font-bold text-7xl">Welcome to Our News Archive.</p>
        <p className="text-2xl">Discover the past through our News Archive.</p>
        <Link to={`/archive`}>
          <Button label="Get started now!" className="p-2" />
        </Link>

        <p className=" ">
          Explore historical headlines effortlessly. Start your journey today!
        </p>
      </div>
    </div>
  );
}
