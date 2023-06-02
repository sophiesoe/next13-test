"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <ul className="flex justify-end items-center space-x-4">
      <li>
        <Link
          href="/"
          className={path === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={path === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/about/team"
          className={path === "/about/team" ? "nav-link active" : "nav-link"}
        >
          Team
        </Link>
      </li>
      <li>
        <Link
          href="/code/repos"
          className={path === "/code/repos" ? "nav-link active" : "nav-link"}
        >
          Code
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
