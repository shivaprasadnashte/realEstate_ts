import React, { useState } from "react";
import Image from "../asets/side.png";
import gicon from "../asets/icons8-google.svg";
import ficon from "../asets/icons8-facebook.svg";
import aicon from "../asets/icons8-apple.svg";
import picture from "../asets/eyeoff.svg";

function Loginpage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [show, setShow] = useState(false);
  const showPassword = () => {
    setShow(!show);
  };
  return (
    <>
      <div className=" bg-[#346373] h-screen ">
        <div className=" flex  md:pt-16 bg-[#346373] justify-center">
          <img
            src={Image}
            alt="f"
            className=" hidden md:block lg:rounded-l-2xl md:w-[350px] lg:w-[500px]"
          />

          <div className=" md:w-[350px] lg:w-[500px] bg-white lg:rounded-r-2xl md:p-10 p-4 pt-10  max-[400px]:">
            <h1 className="font-poppins text-2xl md:text-4xl font-bold  mb-5">
              Welcome to Triphopper
            </h1>
            <p className="font-poppins md:text-xl  pb-4">
              Register your account
            </p>
            <div className="my-2">Email</div>
            <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-3">Password</div>
            <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Create your Password"
                className="w-full p-2 px-6 py-2 rounded placeholder:text-[#667086]"
                width="90vw"
                onChange={handleChange}
                required
              />
              <img
                src={picture}
                alt="g"
                className="pr-2"
                onClick={showPassword}
              />
            </div>

            <div className="my-2 text-[#346373]">
              Password must contain at least 8 characters.
            </div>
            <div className="w-full mt-4">
              <button
                className="w-full p-[10px] md:py-[16px] md:px-[16px] text-white bg-[#346373] mb-4 font-medium rounded-lg"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
            <div className="text-[#346373]">
              By signing up you are agreeing to our{" "}
              <span className="text-[#346373]">Terms of Service</span> and our
              <span className="text-[#346373]"> Privacy Policy</span> .
            </div>

            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-20 md:w-44 h-px my-8 bg-black border-0" />
              <div className="md:w-40 text-center">Or sign in with</div>
              <hr className="w-20 md:w-44 h-px my-8 bg-black border-0" />
            </div>
            <div className=" flex justify-center gap-8">
              <img src={gicon} alt="google" />
              <img src={ficon} alt="fb" />
              <img src={aicon} alt="apple" />
            </div>
            <div className=" text-center p-8">
              {" "}
              Don’t have an account?{" "}
              <span className=" text-[#346373]"> Sign up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
