import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvater from "@/assets/user.png"
import NavLink from "./NavLink";


const NavBar = () => {
  return (
    <div className="container mx-auto flex justify-between mt-6">
    <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
      <Image src={userAvater} alt="user avatar" width={60} height={60}/>
      <button className="btn bg-purple-500 text-white"><Link href={"/login"}>Login</Link></button>
      </div>
    </div>
  );
};

export default NavBar;
