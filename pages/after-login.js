import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PeerBets.io{' '}
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
          $4.33<br></br>
          -$0.38 -7.99%
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              ARG 🇦🇷 vs FRA 🇫🇷 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Score: 3 - 2 <br></br>
            Time: 88:42:30
            </p>
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              The Matrix 👾 vs Andrew Tate 🐉<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Score: 3 - 2 <br></br>
            Time: 88:42:30
            </p>
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Yale vs Stanford 🏀 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Score: 3 - 2 <br></br>
            Time: 88:42:30
            </p>
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Ethereum vs Bitcoin <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Final Score: 3 - 2 <br></br>
            Time: 48:00:00
            </p>
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Kanye 🌎 vs Ye 🌍 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Score: 3 - 2 <br></br>
            Time: 88:42:30
            </p>
          </a>
          <a
            href="/create-room"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
             + <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Join a room / <br></br>Create a new room
            </p>
          </a>
          
        </div>
      </main>
    </>
  )
}
