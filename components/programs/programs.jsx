import React from "react";
import { programsData } from "../components-data/programs-data";
import Logo from "../../public/asset/logo.jpg";
import "./programs.css";

const ProgramPage = () => {
  return (
    <div id='program' className="programs" >
      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span>and fill</span>
        <span className="stroke-text">your Tummy</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category" key={program.heading}>
            <div dangerouslySetInnerHTML={{ __html: program.image }} />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>join now</span>
              <button className="join">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.95 9.88333L5.83337 20L15.95 30.1167M34.1667 20H6.11671"
                    stroke="black"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramPage;
