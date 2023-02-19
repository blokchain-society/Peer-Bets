import Image from "next/image";
import Link from "next/link";
export default function GamesCard({ gameName, imgSrc, id,gameType, gameStatus }) {
  return (
    <Link href={`games/${id}`}>
      <div className="relative w-full h-[10rem] rounded-lg m-8">
        <>
          <div className="imgWrapper w-full h-[180px] lg:w-3/4 mr-4 rounded-lg cursor-pointer hover:opacity-70">
            <Image src={imgSrc} alt="gameImg" layout="fill" objectFit="cover" />
            <style jsx>
              {`
                .imgWrapper {
                  position: absolute;
                  opacity: 0.5;
                }

                div > span {
                  border-radius: 10px;
                }
              `}
            </style>
          </div>
          <div className="text-wrapper font-bold">
            <style jsx>
              {`
                .text-wrapper {
                  z-index: 2;
                  padding-top: 5rem;
                  padding-left: 1rem;
                }
              `}
            </style>
            <h2 className="font-fontDM text-2xl z-2 flex-wrap">{gameName}</h2>
            <p className="font-fontDM">Game : {gameType}</p>
            <p className="font-fontDM">Status : {gameStatus}</p>
          </div>
        </>
      </div>
    </Link>
  );
}
