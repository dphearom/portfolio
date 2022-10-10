import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import navpic from "../assets/navpic.JPG";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-full h-[90px] bg-black">
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
              <li>Projects</li>
              <li>Resume</li>
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
                ? "w-full bg-[#1E2761] text-white absolute top-[90px] left-0 flex justify-center text-center"
                : "absolute left-[-100%]"
            }
          >
            <ul>
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
