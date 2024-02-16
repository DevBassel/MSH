"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiNotification3Line } from "react-icons/ri";
import divider from "../../assets/learn/divider.svg";

export default function Header() {
  return (
    <>
      <header className=" sticky top-0 bg-black justify-between">
        <div className="flex items-center w-full  px-5 md:px-10 py-2 justify-between">
          <div className="capitalize text-xl ">
            <h1>Hello,</h1>
            <h1>TypeScript {"<3"} </h1>
          </div>

          <div className="flex items-center flex-[0.8] justify-end">
            <p className="p-4 hidden md:block bg-white flex-1 mr-5 rounded-full"></p>
            <RiNotification3Line className="text-4xl cursor-pointer" />
            <div className="h-14 w-14 bg-white rounded-full mx-6"></div>
            <IoMdArrowDropdown className="text-4xl cursor-pointer" />
          </div>
        </div>
        <motion.div
          initial={{
            scaleX: 0,
          }}
          transition={{ duration: 1 }}
          animate={{ scaleX: 1 }}
          className="mt-1"
        >
          <Image src={divider} className="w-full" alt="" />
        </motion.div>
      </header>
    </>
  );
}
