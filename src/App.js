import React, { useState } from "react";
import { Navbar,Footer } from "./components";
import { IoCopyOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxLetterCaseLowercase, RxLetterCaseUppercase } from "react-icons/rx";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { MdEmojiSymbols } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COPY_SUCCESS } from "./constants/message";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./constants/characters";
const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const handleGeneratePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("You must Select atleast one option", true);
    }
    let characterList = "";

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }
    setPassword(createPassword(characterList));
  };
  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };
  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  };
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleCopyPassword = (e) => {
    if (password === "") {
      notify("Nothing To Copy", true);
    } else {
      copyToClipboard();
      notify(COPY_SUCCESS);
    }
  };
  return (
    <div>
      <Navbar />
      <div className=" bg-black p-12 h-screen relative flex justify-center font-grotexklylig overflow-hidden ">
        <div className="justify-center flex items-center z-[200] ">
          <div className="w-[350px] h-[420px]  bg-gradient-to-br from-[#2525259e] to-[#060606a5] py-10 px-6 rounded-[10px] items-center ">
            <div className=" z-40 flex items-center w-full justify-between">
              <div className="py-1 px-2 h-12 bg-[#00000053] rounded-md w-[80%] overflow-scroll scrollbar-hide">
                <h3 className=" text-white text-[22px]  font-semibold ">
                  {password}
                </h3>
              </div>

              <div className=" p-[1px] flex justify-center bg-gradient-to-r from-[#409e8d] to-[#13574b] rounded-md ">
                <span
                  onClick={handleCopyPassword}
                  title='copy'
                  className=" p-2 bg-gradient-to-r from-[#1a7564] to-[#0e4e42] rounded-md"
                >
                  <button className=" p-[4px] transition-all duration-300 hover:bg-[#7a7a7a79] bg-[#ffffff67] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border-[1px] border-[#ffffffad] shadow-lg">
                    <IoCopyOutline color="white" size={20} />
                  </button>
                </span>
              </div>
            </div>
            <hr className=" mb-8 mt-3 border-[#ffffff2b] " />
            <div className="mt-3 z-[100] flex justify-between">
              <label
                className=" z-[100] text-[#9f9f9f] flex items-center"
                htmlFor="password-strength"
              >
                <RiLockPasswordLine /> &nbsp; Password Strength
              </label>
              <input
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                className=" w-32 z-[100] focus:outline-none bg-[#f2a8cb] rounded-lg px-2 font-bold"
                type="number"
                id="password-strength"
                name="password-strength"
                max={20}
                min={10}
              />
            </div>

            <div className=" z-[100] flex justify-between mt-3">
              <label
                className=" flex items-center z-[100] text-[#9f9f9f]"
                htmlFor="uppercase"
              >
                <RxLetterCaseUppercase /> &nbsp; Include Uppercase Letters
              </label>
              <input
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className=" z-[100] text-red accent-[#f2a8cb] "
                type="checkbox"
                id="uppercase"
                name="uppercase"
              />
            </div>

            <div className=" z-[100 flex justify-between mt-3">
              <label
                className=" flex items-center z-[100] text-[#9f9f9f]"
                htmlFor="lowercase"
              >
                <RxLetterCaseLowercase /> &nbsp; Include Lowercase Letters
              </label>
              <input
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className=" z-[100] accent-[#f2a8cb]"
                type="checkbox"
                id="lowercase"
                name="lowercase"
              />
            </div>
            <div className=" z-[100] flex justify-between mt-3">
              <label
                className=" flex  items-center z-[100] text-[#9f9f9f]"
                htmlFor="Numbers"
              >
                <TbSortAscendingNumbers />
                &nbsp; Include Numbers
              </label>
              <input
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className=" z-[100] accent-[#f2a8cb]"
                type="checkbox"
                id="Numbers"
                name="Numbers"
              />
            </div>

            <div className=" z-[100] flex justify-between mt-3">
              <label
                className=" flex items-center z-[100] text-[#9f9f9f]"
                htmlFor="Symbols"
              >
                <MdEmojiSymbols />
                &nbsp; Include Symbols
              </label>
              <input
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className=" z-[100] accent-[#f2a8cb]"
                type="checkbox"
                id="Symbols"
                name="Symbols"
              />
            </div>
            <div className="mt-8 p-[1px] bg-gradient-to-r from-[#409e8d] to-[#13574b] rounded-2xl hover:bg-gradient-to-bl transition-all duration-500">
              <button
                onClick={handleGeneratePassword}
                title='generate password'
                className=" w-full text-center py-4  bg-gradient-to-br from-[#1a7564] to-[#0e4e42] rounded-2xl text-white"
              >
                Generate Password
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
           
          </div>
           <Footer/>
        </div>

        <div className="absolute  w-[40%]  h-[35%] bottom-20 purple__gradient" />
        <div className="absolute  w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </div>
  );
};

export default App;
