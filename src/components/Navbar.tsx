import Link from "next/link";
import React from "react";

const classes = "hover:bg-white hover:text-black rounded-lg px-4 py-2 transition duration-300 ease-in-out";

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
      <div className="flex gap-10 mr-4 items-center text-2xl font-bold">
        <Link className={classes} href="/">Home</Link>
        <Link className={classes} href="/leaderboard">Leaderboard</Link>
        <div className={` w-[150px] text-center ${classes}`}>
          <Link href="/get-your-tech-stack">Get your stack</Link>
        </div>
        <div className={` w-[150px] text-center ${classes}`}>
          <Link href="/donate-coffee">Donate a coffee</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
