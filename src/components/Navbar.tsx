import { Sun } from "lucide-react"
import Link from "next/link"
import SearchButton from "./SearchButton"

export default function Navbar() {
  return (
    <nav className="z-50 sticky top-0 h-12 flex items-center justify-between px-10 bg-background/80 backdrop-blur-sm text-foreground ">
      <div className="flex items-center gap-10">
        <Link href="/">
          <h1>gallery</h1>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>

      <SearchButton />
    </nav>
  )
}
