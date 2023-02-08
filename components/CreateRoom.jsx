import React from "react";
import Bg from "../public/bgpic.png";
import Image from "next/image";
const BackgroundImg = () => {
  return (
    <div className="absolute -z-1 w-full h-full">
      <Image src={Bg} layout="fill" objectFit="cover" alt="bg" />
      <style jsx>
        {`
          div {
            z-index: -1;
          }
        `}
      </style>
    </div>
  );
};
const CreateRoom = () => {
  return (
    <>
      <div className="relative z-5 h-[100rem] sm:h-[60rem] lg:h-[52rem]">
        <BackgroundImg />
        <div className=" pb-16 ">
          <section className=" z-5 text-white p-12 text-center flex flex-col items-center">
            <h1 className="text-3xl leading-7 pb-6 font-header">
              Create Your Room For Bet
            </h1>
            <div>
              <p className="font-extralight text-lg leading-8 font-fontJost">
                Galaxy Guild serves as the platform for Players, Guilds, and
                Scholarship Managers to collaborate and make the most out of
                their Metaverse experience!{" "}
              </p>
            </div>
            <form className="mt-4 w-1/2 p-5 border drop-shadow-lg rounded-lg">
              <label
                for="helper-text"
                class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
              >
                Player Name
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
                class="block mb-2 mt-4 text-left  text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Wallet Address
              </label>
              <input
                type="email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0x987...rt893"
              />
              
              <label
                for="helper-text"
                class="block mb-2 text-left mt-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bet
              </label>
              <input
                type="number"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="400 Wei"
              />

              <button className="font-bold font-fontDM font-xl mt-5  text-white bg-gradient-to-r from-btn-blue via-btn-purple to-btn-blue   
        animate-glow bg-300 p-2 rounded-sm">Create room</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
