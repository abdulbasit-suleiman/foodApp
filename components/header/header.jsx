"use client"
import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import Image from "next/image";
import logo from "../../public/asset/doughnuts.jpg";
import icon from "../../public/asset/menu.png";
import Link from "next/link";
import Topmodal from "./mobileModal";

function HeaderPage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header">
      <Image className="logo" src={logo} alt="" width={100} height={100} />
        <div className="nav" >
          <Image className="icon" src={icon} alt="" width={100} height={100}    onClick={() => setShowMenu(true)} />
      {showMenu && <Topmodal onClose={() => setShowMenu(false)} />}
       
        </div>
        <ul className="header-menu">
          <li>
            <Link href="#">
              Home
            </Link>
          </li>
          <li>
            <Link href="#program"  >
              Service
            </Link>
          </li>
          <li>
            <Link href="#availiable">
              Availiable
            </Link>
          </li>
          <li>
            <Link href="#plans">
              Plans
            </Link>{" "}
          </li>
          <li>
            <Link href="#testmonials">
              Testimonials
            </Link>
          </li>
        </ul>
    </div>
  );
}

export default HeaderPage;
