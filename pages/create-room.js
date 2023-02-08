import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {PlanCard,Typography,Button} from "web3uikit"

const Page = () => {
  return (
    <>
      <Head>
        <title>PeerBets | DeFi P2P Betting</title>
        <meta name="description" content="PeerBets Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            &nbsp;
            <code className={styles.code}>Dashboard</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              PeerBets.io{" "}
              {/* <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                /> */}
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <PlanCard
              description={[
                "Unlimited ideas",
                "Unlimited Plugins",
                "Community Support",
                "IPFS Gateway",
              ]}
              descriptionTitle={
                <Typography
                  color="#041836"
                  variant="caption14"
                  weight="semibold"
                >
                  Free Access To
                </Typography>
              }
              footer={
                <Button isFullWidth text="Talk to Sales" theme="primary" />
              }
              isActive
              onChange={function noRefCheck() {}}
              subTitle={
                <Typography color="#041836" variant="subtitle1" weight="600">
                  Starter Plan
                </Typography>
              }
              title={
                <h1 style={{ color: "#041836", fontSize: "64px" }}>
                  <strong>FREE</strong>
                </h1>
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
