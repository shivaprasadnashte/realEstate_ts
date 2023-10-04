import React from "react";
import Navbar from "./Navbar";
import Search from "../asets/search.svg";
import Down from "../asets/downarrow.svg";
import App from "../asets/app.jpeg";
import Filter from "../asets/filter.jpeg";
import Pointer from "../asets/pointer.jpeg"
import "../index.css";
function Searchpage() {
  return (
    <>
      <div className="p-6">
        <Navbar />
        <div className=" lg:flex mt-5  justify-between">
          <input
            type="text"
            placeholder="Enter an address, state, area or zip code"
            className=" border-black border-2 rounded-lg  w-1/2 mb-3 placeholder:p-2 h-9 "
          />
          <div className=" bg-[#346373] md:ml-5 md:px-8 flex text-white p-1  h-9  rounded-md w-[163px] mb-3">
            <img src={Search} alt="search" className=" mr-2 w-5" />
            <button>Search</button>
          </div>

          <div className=" flex border-black border-2 rounded-md md:ml-5  h-9  w-[200px] mb-3">
            <input
              type="text"
              placeholder="Sort By Price"
              className="ml-1 w-[163px] "
            />
            <img src={Down} alt="down" className="w-3 md:w-5 mr-2" />
          </div>

          <div className=" flex border-black border-2 rounded-md md:ml-5  h-9  w-[200px] mb-3">
            <input
              type="text"
              placeholder="Sort By Price"
              className="ml-1 w-[163px] "
            />
            <img src={Down} alt="down" className=" w-3 md:w-5 mr-2" />
          </div>

          <img src={App} alt="app" className=" h-8 mx-2 mb-3" />
          <img src={Filter} alt="filter" className=" h-9  mx-2 " />
        </div>

        <div className=" md:w-1/5 justify-between font-Roboto text-sm md:text-xl mt-10 ">
          <div className=" md:flex justify-between mb-5">
            <p>Filter </p>
            <p> Reset Filter</p>
          </div>
          <div className=" md:flex justify-between mb-5">
            <p>Area</p>
            <p>Property Type</p>
          </div>
          <div className=" md:flex justify-between">
            <div className=" flex border-black border-2 rounded-lg  h-9  w-[150px] mb-5">
              <input
                type="text"
                placeholder="Area Name"
                className="ml-1 w-[120px] placeholder:p-2 "
              />
              <img src={Down} alt="down" className=" w-3 md:w-4 mr-2" />
            </div>

            <div className=" flex border-black border-2 rounded-lg  h-9  w-[150px] mb-5">
              <input
                type="text"
                placeholder="Rentals"
                className="ml-1 w-[120px] placeholder:p-2 "
              />
              <img src={Down} alt="down" className=" w-3 md:w-4 mr-2" />
            </div>
          </div>

          <div>
            <p>Category</p>
            <div className=" flex justify-between mt-3">
              <div className=" ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class="ml-2  font-Roboto">
                  House
                </label>
              </div>

              <div class="">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class="ml-2  font-Roboto">
                  Townhouses
                </label>
              </div>
              <div class="">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class="ml-2  text-lg font-Roboto">
                  Appartment
                </label>
              </div>
            </div>
            <div className=" flex justify-between mt-4">
              <div className=" ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class="ml-2  font-Roboto">
                  Room
                </label>
              </div>

              <div class="">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class="ml-2  font-Roboto">
                  2 BHK
                </label>
              </div>
              <div class="">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class="ml-2  font-Roboto">
                  3 BHK
                </label>
              </div>
              <div className="">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="default-checkbox" class="ml-2  font-Roboto">
                  3 BHK
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex justify-between mt-5">
              <p>Min. Price</p>
              <p>Max. Price</p>
            </div>
            <div className=" flex justify-between mt-5">
              <div className=" flex border-black border-2 rounded-lg   h-9  w-[160px] mb-3">
                <input
                  type="text"
                  placeholder="Rs.100000.00 "
                  className="ml-1 w-[130px] placeholder:p-2 "
                />
                <img src={Down} alt="down" className="w-3 md:w-4 mr-2" />
              </div>
              <div className=" flex border-black border-2 rounded-lg  h-9  w-[160px] mb-3">
                <input
                  type="text"
                  placeholder="Rs.200000.00  "
                  className="ml-1 w-[130px] placeholder:p-2"
                />
                <img src={Down} alt="down" className="w-3 md:w-4 mr-2" />
              </div>
            </div>
          </div>
          <div>
            <div className=" flex justify-between mt-5">
              <p>Bedroom</p>
              <p>Bathroom</p>
            </div>
            <div className=" flex justify-between mt-5">
              <div className=" flex border-black border-2 rounded-lg   h-9  w-[160px] mb-3">
                <input
                  type="text"
                  placeholder="Two "
                  className="ml-1 w-[130px] placeholder:p-2 "
                />
                <img src={Down} alt="down" className="w-3 md:w-4 mr-2" />
              </div>
              <div className=" flex border-black border-2 rounded-lg  h-9  w-[160px] mb-3">
                <input
                  type="text"
                  placeholder="Two "
                  className="ml-1 w-[130px] placeholder:p-2"
                />
                <img src={Down} alt="down" className="w-3 md:w-4 mr-2" />
              </div>
            </div>
          </div>
          <div>
            <div className=" flex justify-between mt-5">
              <p>Min. Size</p>
              <p>Max. Size</p>
            </div>
            <div className=" flex justify-between mt-5">
              <div className=" flex border-black border-2 rounded-lg   h-9  w-[160px] mb-3">
                <input
                  type="text"
                  placeholder="1525feet"
                  className="ml-1 w-[130px] placeholder:p-2 "
                />
                <img src={Down} alt="down" className="w-3 md:w-4 mr-2" />
              </div>
              <div className=" flex border-black border-2 rounded-lg  h-9  w-[160px] mb-3">
                <input
                  type="text"
                  placeholder="1525feet"
                  className="ml-1 w-[130px] placeholder:p-2 "
                />
                <img src={Down} alt="down" className="w-3 md:w-4 mr-2" />
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <h1>Rooms (min)</h1>
            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">1 Room</p>
            </div>

            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">2 Room</p>
            </div>

            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">3 Room</p>
            </div>

            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">4 Room</p>
            </div>

            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">more...</p>
            </div>
          </div>

          <div className=" mt-5">
            <h1>Rent Period (min)</h1>
            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">2 - 12 Months</p>
            </div>

            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">1 - 2 Years</p>
            </div>

            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">2+ Years</p>
            </div>

            <div className=" flex items-center">
              <img src={Pointer} alt="poi" className=" w-4 h-4" />
              <p className=" pl-1">Unlimited</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Searchpage;
