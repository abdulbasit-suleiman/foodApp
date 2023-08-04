"use client"
import React, { useState, useEffect } from "react";
import "./header.css";
import Image from "next/image";
import Amala3 from "../../../public/asset/amala3.jpg";
import icon from "../../../public/asset/menu.png";
import Link from "next/link";
import Topmodal from "./mobileModal";

function HeaderPage() {
  const [modalOpen,setModalOpen]=useState(false)
  return (
    <div className="header">
      <Image className="logo" src={Amala3} alt="" width={100} height={100} />
        <div className="nav" >
          <Image className="icon" src={icon} alt="" width={100} height={100}    onClick={()=>setModalOpen(true)} />
          {modalOpen && 
           <Topmodal onClose={()=>setModalOpen(false)} />
      }
        </div>
        <ul className="header-menu">
          <li>
            <Link href="#">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#program"  >
              Service
            </Link>
          </li>
          <li>
            <Link href="/#availiable">
              Availiable
            </Link>
          </li>
          <li>
            <Link href="/#plans">
              Plans
            </Link>{" "}
          </li>
          <li>
            <Link href="/#testmonials">
              Testimonials
            </Link>
          </li>
        </ul>
    </div>
  );
}

export default HeaderPage;
