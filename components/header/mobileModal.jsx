import Link from "next/link";
import React, { useEffect, useRef } from "react";

function Topmodal({ onClose }){
  const mobileMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        onClose(); 
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

    return(
                <div className="mobile-link"  ref={mobileMenuRef}>
        <div>
        <ul className="mobile-menu "  style={{listStyleType:'none'}}>
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
            </Link>
          </li>
          <li>
            <Link href="/#testmonials">
              Testimonials
            </Link>
          </li>
        </ul>
          </div>
        </div>
    )
}
export default Topmodal