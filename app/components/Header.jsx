import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container">
      <nav className="flex pb-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/profile.png"
              width={200}
              height={200}
              alt="logo"
              className="w-12 h-12 rounded-sm cursor-pointer outline
             outline-1 -outline-offset-2 outline-yellow-600"
            />
          </Link>
        </div>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
