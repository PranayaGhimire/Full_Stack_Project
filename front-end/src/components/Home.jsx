import React from "react";
import mypp from "../assets/mypp.png";
import DownloadButton from "./DownloadButton";
import tailwind from "../assets/Tailwind_CSS_Logo.svg";
import react from "../assets/react.svg";
const Home = () => {
  const cvUrl = ".././assets/Curriculum Vitae.pdf";
  return (
    <>
      <div className="h-300 my-35 md:h-240">
        <div className="flex flex-col justify-evenly items-center md:flex-row">
          <p className="text-center">
            I am a passionate Web Developer, Network Administrator And IT
            Officer
          </p>
          <img
            className="w-40 h-40 my-5 rounded-full"
            src={mypp}
            alt="Profile Pic"
          />
        </div>
        <div className="flex flex-col justify-evenly md:flex-row md:my-10">
          <div>
            <h2 className=" text-center my-2 font-bold md:text-2xl md:my-5">
              Qualifications:
            </h2>
            <p className="text-center">BSC.CSIT Graduated Student from IOST</p>
          </div>
          <div>
            <h2 className="text-center my-2 font-bold md:text-2xl md:my-5">
              Experiences:
            </h2>
            <p className="text-center">
              2 months Experience as an internee at Chitrawan Unique Net in
              L1/L2 Network Support Role
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-evenly">
          <h2 className="md:mx-auto text-center my-2 font-bold md:text-2xl md:my-5">
            Skills:
          </h2>
          <div className="flex flex-col justify-evenly md:flex-row">
            <div>
              <h2 className=" text-center my-4 font-bold md:text-2xl">
                Web Development (
                <i className="fa-solid fa-code mx-1 text-purple-600"></i>)
                Skills
              </h2>
              <ul className="text-center space-y-4">
                <li>
                  HTML
                  <i className="fa-brands fa-html5 text-amber-600 mx-0.5"></i>
                </li>
                <li>
                  CSS
                  <i className="fa-brands fa-css3-alt text-purple-600 mx-1"></i>
                </li>
                <li className="flex items-center justify-center">
                  Tailwind CSS
                  <img src={tailwind} alt="" className="w-5 h-5 mx-1" />
                </li>
                <li>
                  JavaScript
                  <i className="fa-brands fa-js text-amber-600 mx-1"></i>
                </li>
                <li className="flex justify-center">
                  React <img src={react} alt="" className="w-5 h-5 mx-1" />
                </li>

                  <li>
                    Node.JS
                    <i className="fa-brands fa-node text-2xl mx-1 text-green-800"></i>
                  </li>
                <li>
                  SQL
                  <i className="fa-solid fa-database text-cyan-600 mx-0.5"></i>
                </li>
                <li>
                  MongoDB
                  <i className="fa-solid fa-database text-cyan-600 mx-0.5"></i>
                </li>
                <li>
                  PHP
                  <i className="fa-brands fa-php bg-purple-500 text-white mx-1"></i>
                </li>
            
              </ul>
            </div>
            <div>
              <h2 className=" text-center my-4 font-bold md:text-2xl">
                Networking (
                <i className="fa-solid fa-network-wired text-red-600"></i>)
                Skills
              </h2>
              <ul className="text-center space-y-4">
                <li>Cisco Switch Configuration</li>
                <li>Cisco Router Configuration</li>
                <li>DHCP Configuration</li>
                <li>VLAN Configuration</li>
                <li>Routing Protocol Configuration</li>
                <li>NAT Configuration</li>
                <li>ONT Configuration</li>
                <li>OLT Configuration</li>
              </ul>
            </div>
          </div>
        </div>
        <DownloadButton cv={cvUrl}></DownloadButton>
      </div>
    </>
  );
};

export default Home;
