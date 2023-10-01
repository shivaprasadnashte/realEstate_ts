import React, { useState } from "react";
import Logo from "../asets/res.jpeg";
import Phone from "../asets/phone.svg";
import Profile from "../asets/profile.svg";
import Menu from "../asets/menu.svg";

function Navbar() {
  const [state, setState] = useState(false);
  const menuHandler = () => {
    setState(!state);
  };

  return (
    <>
      {/* navbar for laptop */}
      <div className=" text-xs lg:text-md xl:text-lg 2xl:text-xl  md:flex w-full  hidden md:justify-between ">
        <img src={Logo} alt="logo" className=" w-32 pl-4 p-1" />

        <div className=" flex items-center gap-5">
          <p> Home </p>
          <p> About Us </p>
          <p> Properties </p>
          <p> Agents </p>
          <p> Favorites </p>
          <p> Blogs </p>
          <p> Contact </p>

          <p> Contact </p>
          <img src={Phone} alt="p" className=" w-7" />
          <p className="">853-280-0542</p>
          <img src={Profile} alt="p" className="w-7 " />
        </div>
      </div>

      {/* Navbar for mobile and tablet */}
      <div className=" flex justify-between md:hidden">
        <img src={Logo} alt="logo" className=" w-32 pl-4 p-1" />
        <div>
        <button className=" justify-end mr-3" onClick={menuHandler}>
          {" "}
          <img src={Menu} alt="menu" />
        </button>
        </div>
      </div>

      <div className={state ? "absolute" : "hidden"}>
        <div className=" md:hidden ml-10  mt-3 py-3  w-screen text-lg  ">
          <img src={Profile} alt="pro" className=" w-11" />
          <div className=" flex gap-2">
            <img src={Phone} alt="p" className=" w-5" />
            <p>853-280-0542</p>
          </div>
          <p className=""> Home </p>
          <p> About Us </p>
          <p> Properties </p>
          <p> Agents </p>
          <p> Favorites </p>
          <p> Blogs </p>
          <p> Contact </p>
          <p> Contact </p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
