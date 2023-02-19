import Image from "next/image";
import Link from "next/link";
import twitIcon from "../public/social/Twitter.webp";
import linkIcon from "../public/social/linkedin.webp";
import Logo from "../public/PeerBets-logos_white.png";

const FooterLink = ({ linkName }) => {
  return (
    <a href="#" className="text-gray-400 hover:text-[#0FDCC2]">
      {linkName}
    </a>
  );
};

export default function Footer() {
  return (
    <div className="bg-vision p-8 lg:p-12 lg:flex lg:flex-row lg:justify-between
    ">
      <div className="">
      <Image src={Logo} width={100} height={70} alt="Logo" />
        <p className="font-fontDM pt-2">
        A blockchain-based betting platform. Allowing
          gamblers,<br /> to gamble in a trustless
          manner.
        </p>
      </div>

      <div className="flex flex-col font-fontDM pt-8">
        <h2 className="font-bold font-xl">Company</h2>
        <FooterLink linkName="Home" />
        <FooterLink linkName="About" />
        <FooterLink linkName="Vision" />
        <FooterLink linkName="News" />
      </div>



    </div>
  );
}
