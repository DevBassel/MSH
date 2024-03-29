"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiNotification3Line } from "react-icons/ri";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("dash");
  return (
    <>
      <header className=" sticky top-0 bg-black z-20 justify-between">
        <div className="flex items-center w-full  px-5 md:px-10 py-1 justify-between">
          <div className="capitalize ">
            <h1>{t("hello")},</h1>
            <h1>Magdy Basel {"<3"} </h1>
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
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            loading="lazy"
            src="/assets/learn/divider.png"
            className="w-full"
            alt=""
          />
        </motion.div>
      </header>
    </>
  );
}
