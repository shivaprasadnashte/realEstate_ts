import React from "react";
import Image from "../asets/proicon.png";

export default function RealCard() {

  const Column2 = ({ imageName, text, text2,text3 }) => (
    <>
           
      <div class="flex flex-col w-[315px] sm:w-fit    mb-4    m-0 text-gray-900   border-[2px] rounded-[20px]  mx-4 "> 
         <div className="flex items-center justify-center ">
          <img src={Image} alt="img" className=" rounded-[20px]  min-w-[315] w-full " />
          {/* <Image
            width={315}
            height={277}
            src={`/${imageName}`}
            alt=" random imgee"
            className=" rounded-[20px]  min-w-[315] w-full "
          /> */}
          </div>
          <div className="px-2 pb-4">
           <div class="mt-1 pt-4  text-[28px] font-serif font-medium   justify-start flex  ">
                {text}
              </div>
              <div class=" text-[22px] text-[#4F4F4F] font-serif    justify-start flex  ">
                {text2}
              </div>
                <p class="text-[16px]  text-[#888888] justify-center flex">
                  About Agent:(Property Description){text3}{" "}
                </p>
                <p className="text-[18px] font-semibold text-[#346373] ">Read More..</p>
                </div>
            </div>
          
            
    </>
  );

  return (
    <> 
     <div className="flex flex-col items-center justify-center text-[32px] font-serif font-medium py-6">Our Agents</div>
        <div className="grid items-center justify-center mx-2 my-4 overflow-x-auto lg:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-2 ">
      
        {/* <div className="flex flex-row "> */}
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
        </div>
       
     {/* </div> */}
    </>
  );
}