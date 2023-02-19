import Image from "next/image";
import Astro from "../public/vision/Astronaut.webp";
import Rocket from "../public/vision/rocket.webp";

export default function Vision() {
  return (
    <div className="bg-vision px-8  py-12 h-[62rem] lg:h-[60rem] lg:py-6 relative font-fontDM">
      <div className="rocket">
        <Image src={Rocket} alt="rocket" width={388} height={360} />
        <style jsx>
          {
            `
               .rocket{
                 display:none;
               }
               @media(min-width:1024px){
                 
                 .rocket{
                   display:initial;
                   position:absolute;
                   left:30%;
                   top:-2rem;
                   opacity:0.5;
                 }
               }

            `
          }
        </style>
      </div>

      <section className="flex flex-col items-center sm:flex-row sm:justify-around lg:flex lg:flex-row lg:justify-between  lg:py-10 lg:z-5">
      <div className="hidden lg:block lg:flex-1 lg:pl-12 animate">
        <style jsx>{
          `
            .animate{
              animation-name:scale, trans;
              animation-duration: 3s,3s;
              animation-iteration-count: 0 , infinite;

            }

            @keyframes scale {

              20%, 40%, 60%, 80%, 0%, 100% {
                animation-timing-function: cubic-bezier(.215,.61,.355,1);
              }
              0%{
                opacity:0;
                transform:scale3d(.3,.3,.3);
              }
              40%{
                opacity:0.5;
                transform:scale3d(.9,.9,.9);
              }
             
              100%{
                opacity:1;
                transform:scale3d(1,1,1);
              }
            }
            @keyframes trans {

              0%{

                transform:translate(2px,4px);
              }
              20%{
                transform:translate(9px,-8px);
              }
              60%{
                transform:translate(9px,-12px);
              }
             
              80%{
                transform:translate(10px,13px);
              }
             
              100%{
                transform:translate(12px,15px);
              }
             
            }
          `
        }</style>
      <Image src={Astro} alt="astro" width={400} height={680} />

      </div>

      <div className="pl-8 flex-1 lg:hidden animate ">
      <style jsx>{
          `
            .animate{
              animation-name:scale, trans;
              animation-duration: 3s,3s;
              animation-iteration-count: 0 , infinite;

            }

            @keyframes scale {

              20%, 40%, 60%, 80%, 0%, 100% {
                animation-timing-function: cubic-bezier(.215,.61,.355,1);
              }
              0%{
                opacity:0;
                transform:scale3d(.3,.3,.3);
              }
              40%{
                opacity:0.5;
                transform:scale3d(.9,.9,.9);
              }
             
              100%{
                opacity:1;
                transform:scale3d(1,1,1);
              }
            }
            @keyframes trans {

              0%{

                transform:translate(2px,4px);
              }
              20%{
                transform:translate(9px,-8px);
              }
              60%{
                transform:translate(9px,-12px);
              }
             
              80%{
                transform:translate(10px,13px);
              }
             
              100%{
                transform:translate(12px,15px);
              }
             
            }
          `
        }</style>
      <Image src={Astro} alt="astro" width={230} height={400} />
      </div>

      <div className="flex-1 pr-8 lg:flex-1">
        <h1 className="text-4xl pb-4 font-bold">Vision</h1>
        <article className="text-xl lg:pr-20">
        <p className="pb-8"> Peer-Bets' mission is to accelerate the Web3 and DeFi adoption by providing a large number of users who don't know much about team creation, advanced betting, etc by providing them with a simple win or lose peer-to-peer betting platform.</p> 
          
        <p className="sm:flex-1 pb-8">  Group of friends can create their own private betting pool and place simple win-or-lose bet among themselfs with instant payouts among yourself. The PeerBets ID can be shared over messaging channels, social-media for you friends to join you in betting.</p> 
          
        <p>   Peer-Bets is committed to enhance
          the gamble experience in a secured way.   </p>
        </article>
      </div>

      </section>
    </div>
  );
}
