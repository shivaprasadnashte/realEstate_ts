import React, { useState } from "react";
import Image from "../asets/res.jpeg";
import Phone from "../asets/phone.svg";
import Profile from "../asets/profile.svg";
function Navbar() {
  const [state, setState] = useState(true);
  const menuHandler = () => {
    setState(!state);
  };

  return (
    <>
     <div className=" lg:hidden flex bg-yellow-300 ">
        <img
          src={Image}
          alt="s"
          className=" w-20  "
        />
          <div className=" lg:hidden bg-green-500 text-center ">
            <button onClick={menuHandler}> Menu</button>
          </div>
        </div>

      <div className="lg:flex lg:px-8  px-5 ">
        <img
          src={Image}
          alt="s"
          className=" hidden lg:block md:w-[203px] md:px-8 "
        />
        <div className={state ? "block" : "hidden"}>
          <div className=" lg:flex items-center">
            <div className=" lg:gap-12 items-center pt-3 lg:ml-96 lg:flex justify-end  ">
              <img src={Profile} alt="p" className=" w-5 md:w-11 lg:hidden " />
              <p className=" font-Roboto lg:text-xl text-xs  text-[#346373] ">
                Home
              </p>
              <p className=" font-Roboto lg:text-xl text-xs  text-[#0B0A0A] ">
                About Us
              </p>
              <p className=" font-Roboto lg:text-xl text-xs  text-[#0B0A0A] ">
                Properties
              </p>
              <p className=" font-Roboto lg:text-xl text-xs  text-[#0B0A0A] ">
                Agents
              </p>
              <p className=" font-Roboto lg:text-xl text-xs  text-[#0B0A0A] ">
                Favorites
              </p>
              <p className=" font-Roboto lg:text-xl text-xs  text-[#0B0A0A] ">
                {" "}
                Blogs
              </p>
              <p className=" font-Roboto lg:text-xl text-xs  text-[#0B0A0A] ">
                {" "}
                Contact
              </p>
              <p className=" font-Roboto lg:text-xl text-xs  text-[#0B0A0A] ">
                Sell/Rent Property
              </p>
            </div>
            <div className=" flex items-center pt-3 lg:ml-28 lg:justify-end">
              <img src={Phone} alt="p" className=" w-5 lg:w-11" />
              <p className=" font-Roboto text-xs lg:text-xl  text-[#0B0A0A] mx-3 ">
                {" "}
                853-280-0542
              </p>
              <img
                src={Profile}
                alt="p"
                className=" w-5 lg:w-11 hidden lg:block "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
