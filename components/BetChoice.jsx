import Image from "next/image";
import Bg from "../public/bgpic.png";
import { Circular } from "../utils/CircularAnimation";
import Link from "next/link";
import { GrAddCircle } from "react-icons/gr";
import { gamesList } from "../utils/gameList";
import { useEffect, useState } from "react";
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

export default function BetChoice({ id }) {

  const data = gamesList.filter((el) => el.id === id);
  return (
    <div className="relative z-5 h-[90rem] sm:h-[60rem]  lg:h-[55rem]">
      <BackgroundImg />
      <div className=" pb-16 ">
        <section className=" z-5 text-white p-12 text-center flex flex-col items-center">
          <h1 className="text-3xl leading-7 pb-6 font-header">
            BRING THE GAME
          </h1>

          <div>
            <p className="font-extralight text-lg leading-8 font-fontJost">
              Galaxy Guild serves as the platform for Players, Guilds, and
              Scholarship Managers to collaborate and make the most out of their
              Metaverse experience!{" "}
            </p>
            <h1 className="text-3xl leading-7 pb-6 mt-5 font-header text-yellow-600">
              {data[0].gameName}
            </h1>
            <h1 className="text-3xl leading-7 pb-6 mb-5 font-header mt-2 text-pink-600">
              {data[0].gameType}
            </h1>
          </div>
          <Circular />
        </section>

        <div className="grid place-content-center ">
          <button
            className="font-bold font-fontDM font-xl  text-center text-white bg-gradient-to-r from-btn-blue via-btn-purple to-btn-blue   
        animate-glow bg-300 p-3 rounded-full"
          >
            <Link href="createroom">
              <h1 className="whitespace-nowrap d-flex justify-between">
                <span className="mt-2 mx-2">Create-Room </span>
                <GrAddCircle size="40" />
              </h1>
            </Link>
          </button>

          <button
            className="font-bold font-fontDM font-xl  text-center text-white bg-gradient-to-r from-btn-blue via-btn-purple to-btn-blue   
        animate-glow bg-300 mt-4 p-3 rounded-full"
          >
            <Link href="joinroom">
              <h1 className="whitespace-nowrap d-flex justify-between">
                <span className="mt-2 mx-2">Join-Room </span>
                <GrAddCircle size="40" />
              </h1>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
