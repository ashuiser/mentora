import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div>
          <Image
            src="/images/brand.svg"
            alt="logo"
            width={150}
            height={30}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <p>Sign In</p>
      </div>
    </nav>
  )
}

export default Navbar
