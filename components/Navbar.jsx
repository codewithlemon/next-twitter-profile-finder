import { useRouter } from "next/router"
import Link from "next/link"

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="max-w-xl w-full mx-auto px-4 pt-20 pb-3">
      <h1 className="text-5xl text-center font-medium pb-3">
        Twitter Profile Finder
      </h1>
      <div className="text-center">
        <Link href="/">
          <a
            className={
              router.pathname === "/"
                ? `border-b-4 border-slate-700 px-2 py-1`
                : "px-2 py-1"
            }
          >
            Try It
          </a>
        </Link>
        <Link href="/why">
          <a
            className={
              router.pathname === "/why"
                ? `border-b-4 border-slate-700 px-2 py-1`
                : "px-2 py-1"
            }
          >
            Why?
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
