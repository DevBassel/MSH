"use client";
import Image from "next/image";
import React from "react";
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
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/learn/learn.png" alt="logo" />

        <ul className=" hidden md:flex ml-5 flex-1 justify-start list-none navBarUl select-none md:flex-row ">
          <li className="item">
            <Link href={"/"}>{t("home")}</Link>
          </li>
          <li className="item">
            <Link href={"/about"} locale={local}>
              {t("about")}
            </Link>
          </li>
        </ul>

        <Button text={t("btn")} className="bg-[#FFC107] text-black " />
      </div>

      <Link href={"/"}>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          loading="lazy"
          src="/assets/logos/learn_logo.svg"
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
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          loading="lazy"
          src="/assets/learn/divider.png"
          className="w-full"
          alt=""
        />
      </motion.div>
    </nav>
  );
}
