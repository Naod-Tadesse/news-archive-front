import React from "react";
import { Menubar } from "primereact/menubar";
import image from "../assets/lo.png";
import { Button } from "primereact/button";
import "./home.css";

export default function Home() {
  return (
    <div className="h-screen background-image background-overlay">
      <div className="flex align-items-center justify-content-center h-full no-blur">
        <p>
          Welcome to Our News Archive. Explore a curated collection of headlines
          from various sources in our News Archive. Stay informed and discover
          trending topics with just a click. Get started now!
        </p>
      </div>
    </div>
  );
}
