import React, { useState } from "react";
import Image from "../asets/side.png";
import gicon from "../asets/icons8-google.svg";
import ficon from "../asets/icons8-facebook.svg";
import aicon from "../asets/icons8-apple.svg";
import picture from "../asets/eyeoff.svg";

function Loginpage() {
  return (
    <>
      <div className=" bg-[#346373] px-3 md:h-screen">
        <div className=" flex pl-3 md:pl-5 md:pt-16 bg-[#346373]  justify-center">
          <img
            src={Image}
            alt="f"
            className=" hidden md:block lg:rounded-l-2xl md:w-[350px] lg:w-[500px]"
          />

          <div className=" md:w-[350px]  lg:w-[500px] bg-white lg:rounded-r-2xl md:p-6 p-4 pt-10  max-[400px] ">
            <h1 className="font-poppins text-2xl md:text-4xl font-bold  mb-5 text-left">
              Verify your phone number
            </h1>
            <p className="font-poppins md:text-xl text-left  pb-4">
              We have sent an OTP to 9523004419
            </p>
            <div className=" flex ">
              <div className="grid grid-cols-6 gap-3 mx-2 my-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="sm:w-[40px] sm:h-[40px] h-[40px] w-[40px] mx-[5px] text-2xl text-center rounded-[6px] border-[1px] border-gray-300 "
                    onChange={(e) => {
                      if (e.target.value.length === 1) {
                        const nextInput = e.target.nextElementSibling;
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex  flex-row   w-[320px]  ">
              Didn’t receive the OTP ?{" "}
              <div className="text-[#346373]">Resend</div>
            </div>

            <div className=" md:w-full mt-4 ">
              <button className=" w-[320px]  p-[10px] md:py-[16px] md:px-[16px] text-white bg-[#346373] mt-5  font-medium rounded-lg">
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
