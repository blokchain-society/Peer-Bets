import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PeerBets | DeFi P2P Betting</title>
        <meta name="description" content="PeerBets Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main className={styles.main}>
        <Navbar />
        {/* <div className={styles.description}>
          <p>
            &nbsp;
            <code className={styles.code}>Connect your Wallet</code>
          </p>
          <div>
            <a href="/" target="_blank" rel="noopener noreferrer">
              PeerBets.io{" "}
            </a>
          </div>
        </div>

        <div className={styles.center}>
          Welcome to our decentralized peer-to-peer betting platform!<br></br>
          Our platform allows users to bet on a variety of events and outcomes
          with other users, all without the need for a central authority. By
          utilizing blockchain technology, we provide a secure and transparent
          way to place bets and ensure that all payouts are fair and accurate.
          <br></br>
          Our platform also offers a wide range of markets, from sports and
          politics to entertainment and financial markets. PeerBets provides
          instant payouts and the service is provided for free.<br></br>
          Join our platform today and experience the future of betting!<br></br>
        </div> */}
      </main>
    </>
  );
}
