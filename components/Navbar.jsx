import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/PeerBets-logos_white.png";
import GlowingBtn from "../utils/glowingBtn";

const HamIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="24"
      height="24"
      fill="#d4d0d0"
      className="text-white"
      viewBox="0 0 122 103.609"
      enableBackground="new 0 0 122.879 103.609"
    >
      <g>
        <path
          fillRule="evenodd"
          clipule="evenodd"
          d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
        />
      </g>
    </svg>
  );
};

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [getDimensions, setDimensions] = useState("");

  // useEffect(()=>{
  //   function getDimensions(){

  //   }

  // })

  const handleOnClick = () => {
    setNavOpen(true);
  };
  return (
    <>
      <nav className="bg-dk-bluish h-20 flex flex-row items-center px-8 justify-between ">
        <div className="lg:flex lg:flex-row lg:justify-between">
        <Image src={Logo} width={100} height={60} alt="logo" />

          <ul className="hidden font-header lg:flex lg:flex-row lg:px-8 ">
            <li className="pl-2 cursor-pointer mx-2">Home</li>
            <li className="pl-2 cursor-pointer mx-2">About</li>

            <li className="pl-2 cursor-pointer mx-2">Vision</li>
            <li className="pb-2 cursor-pointer mx-2 "><Link href="games">Games</Link></li>
            {/* <li className="pl-2 cursor-pointer mx-2">Create-Room</li> */}
          </ul>
        </div>
        <button className="lg:hidden cursor-pointer" onClick={handleOnClick}>
          <HamIcon />
        </button>

        <div className="hidden lg:flex lg:flex-row lg:justify-between">
          <button type="button" data-toggle="modal" data-target="#exampleModal">
            <GlowingBtn btnName="Authorised Your Self" />
          </button>
        </div>
      </nav>

      {isNavOpen ? (
        <div
          className="z-10 fixed w-80 h-screen flex bg-white justify-start pl-8
        pt-5 right-0 top-0 text-black"
        >
          <ul>
            <li className="pb-2 cursor-pointer ">Home</li>
            <li className="pb-2 cursor-pointer ">About</li>
            <li className="pb-2 cursor-pointer ">Vision</li>
            <li className="pb-2 cursor-pointer "><Link href="games">Games</Link></li>
          </ul>
        </div>
      ) : null}

      {/* modal  */}
      <div
        className="modal fade bg-dk-bluish"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-dk-bluish">
          <div className="modal-content bg-gradient-to-r">
            <div className="modal-header">
              <h1
                className="text-3xl text-black leading-7 pb-6 font-header modal-title"
                id="exampleModalLabel"
              >
                Authorisation
              </h1>
            </div>
            <div className="modal-body">
              <form>
              <label
                  for="helper-text"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Your Username
                </label>
                <input
                  type="text"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Kali-Decoder"
                />
                <label
                  for="helper-text"
                  class="block mb-2 mt-4  text-sm font-medium text-gray-900 dark:text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
                <p
                  id="helper-text-explanation"
                  class="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  We’ll never share your details. Read our{" "}
                  <a
                    href="#"
                    class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>

                <label
                  for="helper-text"
                  class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                />

                
              </form>
            </div>
            <div className="modal-footer">
              <button
                data-dismiss="modal"
                className="font-bold font-fontDM font-xl  text-center text-white bg-gradient-to-r from-btn-blue via-btn-purple to-btn-blue   
        animate-glow bg-300 p-2 rounded-sm"
              >
                Cancel
              </button>

              <button
                className="font-bold font-fontDM font-xl  text-center text-white bg-gradient-to-r from-btn-blue via-btn-purple to-btn-blue   
        animate-glow bg-300 p-2 rounded-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
