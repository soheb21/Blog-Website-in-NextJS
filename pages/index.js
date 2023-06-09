import Head from 'next/head'
 //automatically ap ke img ko optimize kr dega is componwnts se.import Script from 'next/script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     

      <main className={styles.main}>

        <div className={styles.description}>
          <p>
            Get Started&nbsp;
            <code className={styles.code}>from Shoeb</code>
          </p>

          <div>
            <a
              href="https://portfolio-caee7.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <h2 className={inter.className}>
              About Me <span>-&gt;</span>
            </h2>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <span className="dummy"><h1>&lt; Hunting Coder /&gt;</h1></span>
          <p>A hunting coders by a hunting coder</p>

        </div>

        <div className={styles.grid}>
          <a
            href="https://www.w3schools.com/js/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              JavaScript <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn JavaScript from Basic to advance!!
            </p>
          </a>

          <a
            href="https://www.w3schools.com/whatis/whatis_frontenddev.asp#:~:text=A%20Front%2DEnd%20Developer%20is,%2DEnd%20as%20server%2Dside."
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Frontend <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about HTML, CSS, BootStap, Scss/Sass, React and Many more
            </p>
          </a>

          <a
            href="https://www.coursera.org/articles/back-end-developer"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Backend <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn About Real world Latest Technology like NodeJs, NextJS, ExpressJs, MongoDB
            </p>
          </a>

          <a
            href="https://www.gadgets360.com/news"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tech-News <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get up to date and know what are new technology are coming and many more!
            </p>
          </a>

        </div>

      </main>
    </>
  )
}
