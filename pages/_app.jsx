import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-[Rubik] text-slate-900 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Head>
        <title>Twitter Profile Finder</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
