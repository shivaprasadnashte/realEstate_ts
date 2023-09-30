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
      <div className=" bg-[#346373] px-3 md:h-screen">
        <div className=" flex pl-3 md:pl-5 md:pt-16 bg-[#346373]  justify-center">
          <img
            src={Image}
            alt="f"
            className=" hidden md:block lg:rounded-l-2xl md:w-[350px] lg:w-[500px]"
          />

          <div className=" md:w-[350px] lg:text-center lg:w-[500px] bg-white lg:rounded-r-2xl md:p-6 p-4 pt-10  max-[400px] ">
            <h1 className="font-poppins text-2xl md:text-4xl font-bold  mb-5 text-left">
            Verify your phone number
            </h1>
            <p className="font-poppins md:text-xl text-left  pb-4">
            OTP will be sent to this number
            </p>
            <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px]  border-[0.5px] mt-2 rounded-[5px]">
            <div className="flex items-center px-2 text-[#667086]">+91</div>
                <input
                  type="number"
                  name="number"
                  placeholder="Email your phone number"
                  className="w-full p-2 px-6 py-4 rounded  placeholder:text-[#667086]"
                //   onChange={handleChange}
                  required
                />
              </div>

           
            <div className="w-full mt-4 ">
              <button
                className=" w-[320px]  p-[10px] md:py-[16px] md:px-[16px] text-white bg-[#346373] mt-5  font-medium rounded-lg"
                onClick={handleSubmit}
              >
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
