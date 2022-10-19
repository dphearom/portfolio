import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import navpic from "../assets/navpic.JPG";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-full h-[90px] bg-[#004F76] container mx-auto">
        <div className="max-w-1240px mx-auto px-4 flex justify-between items-center h-full">
          <div>
            <img
              src={navpic}
              className="h-20 w-20 rounded-full object-cover"
              alt="Phearom smiling while standing in front of NYC, his dream place"
            />
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-white items-center">
              <li>
                <HashLink
                  smooth
                  to="/#projects"
                  class="group transition-all duration-300 ease-in-out"
                >
                  <span class="text-white pb-2 bg-left-bottom bg-gradient-to-r from-[#2E8BC0] to-[#2E8BC0] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Projects
                  </span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#projects"
                  class="group transition-all duration-300 ease-in-out"
                >
                  <span class="text-white pb-2 bg-left-bottom bg-gradient-to-r from-[#2E8BC0] to-[#2E8BC0] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Resume
                  </span>
                </HashLink>
              </li>
              <button className="ml-4">Contact</button>
            </ul>
          </div>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <AiOutlineClose size={30} className="text-white" />
            ) : (
              <AiOutlineMenu size={30} className="text-white" />
            )}
          </div>

          <div
            className={
              nav
                ? "w-full bg-[#050A30] text-white absolute top-[90px] left-0 flex justify-center text-center"
                : "absolute left-[-100%]"
            }
          >
            <ul>``
              <li className="text-2xl">Projects</li>
              <li className="text-2xl">Resume</li>
              <button className="m-8">Contact</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
