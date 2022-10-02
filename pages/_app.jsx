import "../styles/globals.css"
import { SavedProfilesProvider } from "../context/SavedProfiles"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <SavedProfilesProvider>
      <div className="font-[Rubik] text-slate-900 grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Head>
          <title>Twitter Profile Finder</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SavedProfilesProvider>
  )
}

export default MyApp
