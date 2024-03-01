"use client";
import Image from "next/image";
import React from "react";
import learnLogo from "@app/assets/logos/learn_logo.svg";
import learn from "@app/assets/learn/learn.svg";
import divider from "@app/assets/learn/divider.svg";
import { motion } from "framer-motion";
import { Link } from "@app/util/navigation";
import { useLocale, useTranslations } from "next-intl";
import Button from "../common/Button";

export default function Nav() {
  const local = useLocale();
  const t = useTranslations("learnNav");

  return (
    <nav className=" w-[95%] m-auto  backdrop-blur-lg bg-opacity-35  rounded-full text-white p-1.5 px-5">
      <div className="m-auto capitalize justify-between flex items-center p-1">
        <Image src={learn} alt="logo" />

        <ul className=" hidden md:flex ml-5 flex-1 justify-start list-none [&>li]:relative  navBarUl select-none md:flex-row [&>li]:mr-2 [&>li]:lg:mr-10 [&>li]:cursor-pointer ">
          <li>
            <Link href={"/"}>{t("home")}</Link>
          </li>
          <li>
            <Link href={"/about"} locale={local}>
              {t("about")}
            </Link>
          </li>
        </ul>

        <Button text={t("btn")} className="bg-[#FFC107] text-black " />
      </div>

      <Link href={"/"}>
        <Image
          src={learnLogo}
          alt="learn logo"
          className="block mx-auto -mt-14"
        />
      </Link>

      <motion.div
        initial={{
          scaleX: 0,
        }}
        transition={{ duration: 1 }}
        animate={{ scaleX: 1 }}
        className="mt-2"
      >
        <Image src={divider} className="w-full" alt="" />
      </motion.div>
    </nav>
  );
}
