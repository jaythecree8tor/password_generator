import React from "react";
import { Navbar } from "./components";
import { IoCopyOutline } from "react-icons/io5";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-black p-12 h-screen">
        <div className=" z-40">
          <h3 className=" text-white">Password</h3>
          <button>
            <IoCopyOutline color="white" size={20} />
          </button>
        </div>

        <div className=" z-[100]">
          <label className=" z-[100] text-white" htmlFor="password-strength">
            Password Strength
          </label>
          <input
            className=" z-[100]"
            type="number"
            id="password-strength"
            name="password-strength"
            max={20}
            min={10}
          />
        </div>

        <div className=" z-[100]">
          <label className=" z-[100] text-white" htmlFor="password-strength">
            Include Uppercase Letters
          </label>
          <input
            className=" z-[100]"
            type="number"
            id="password-strength"
            name="password-strength"
          />
        </div>

        <div className=" z-[100]">
          <label className=" z-[100] text-white" htmlFor="password-strength">
            Password Strength
          </label>
          <input
            className=" z-[100]"
            type="number"
            id="password-strength"
            name="password-strength"
           
          />
        </div>
        <div className="absolute  w-[40%]  h-[35%] bottom-20 purple__gradient" />
        <div className="absolute  w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </div>
  );
};

export default App;
