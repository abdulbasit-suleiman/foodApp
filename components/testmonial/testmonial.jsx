"use client";
import "./testmonial.css";
import { testmonialData } from "../components-data/testmonial-data";
import Logo from "../../public/asset/chicken4.jpg";
import React, { useState } from "react";
import Image from "next/image";

export function TestmonialPage() {
  const [selected, setSelected] = useState(0);
  const testmonialsLength = testmonialData.length;

  return (
    <div id="testmonials" className="testmonial-container">
      <div className="left-t">
        <span>testimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <span style={{ color: "orange" }}>
          {testmonialData[selected].review}
        </span>
        <span>
          {testmonialData[selected].name} - {testmonialData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <Image src={Logo} alt="" width={400} height={400} />
      </div>
    </div>
  );
}
