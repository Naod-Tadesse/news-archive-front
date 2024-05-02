import React from "react";
import { Menubar } from "primereact/menubar";
import NBS_LOGO from "../assets/NBS_LOGO.png";
import { Button } from "primereact/button";

export default function BasicDemo() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },

    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
  ];

  return (
    <>
      <nav className="bg-black text-[#E8E6E6] flex justify-between items-center p-2"></nav>
    </>
  );
}
