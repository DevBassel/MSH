"use client";
import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import learnLogo from "../../assets/logos/learn_logo.svg";
import { Link } from "../../util/navigation";

export default function Nav() {
  return (
    <nav className=" w-[95%] m-auto  backdrop-blur-lg bg-opacity-35  rounded-full text-white p-1.5 px-5">
      <div className="m-auto capitalize flex items-center text-black  justify-between p-1">
        <Button text={"Demo Use"} className="bg-white  " />
        <Button text={"Get The App"} className="bg-[#FFC107] " />
      </div>

      <Link href="/">
        <Image
          src={learnLogo}
          alt="learn logo"
          className="block mx-auto -mt-14 cursor-pointer"
        />
      </Link>
    </nav>
  );
}
