import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" py-4 px-4 flex justify-between font-mono">
      <div className="flex items-center">
        <img className=" w-20 h-20" src="/Logo.png" alt="Logo" />
        <div className="flex flex-col font-mono text-3xl font-extrabold justify-center">
          <p className="">Wheel of</p>
          <p className="">Tech Stack</p>
        </div>
      </div>
      <div className="flex gap-6 mr-4 items-center text-2xl font-bold">
        <Link href="/">Home</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <div className="">
          <Link href="/get-your-tech-stack">Get your stack</Link>
        </div>
        <Link href="/donate-coffee">Donate a coffee</Link>
      </div>
    </nav>
  );
};

export default Navbar;
