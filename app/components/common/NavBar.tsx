"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@app/util/navigation";
import Button from "./Button";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaBurger } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

export default function NavBar() {
  const locate = useLocale();
  const [toggle, setToggle] = useState(false);
  const t = useTranslations("NavBar");
  const path = usePathname();

  const changLocate = locate === "en" ? "ar" : "en";
  const navItems = [
    {
      id: 1,
      name: t("home"),
      to: `/${locate}`,
    },
    {
      id: 2,
      name: t("about"),
      to: "/about",
    },
    {
      id: 3,
      name: t("login"),
      to: "/auth/login",
    },
  ];

  console.log(`${path}`);
  return (
    <nav className="sticky w-[95%]  z-10  top-3 m-auto  backdrop-blur-lg bg-[#a7a] bg-opacity-35  rounded-full text-white p-1.5 px-3">
      <div className=" container m-auto capitalize flex relative items-center justify-around p-1">
        <Link
          href="/"
          locale={changLocate}
          className={` mx-3 ${changLocate === "ar" ? "border-r" : "border-l"}`}
        >
          <Button
            text={changLocate === "ar" ? "ع" : "En"}
            className="hover:scale-125 transition-all"
          />
        </Link>

        <div className="w-full md:w-fit">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            loading="lazy"
            src="/assets/logos/home_logo.svg"
            alt="logo"
            className="w-24"
          />
        </div>

        <motion.div
          initial={{
            x: -500,
          }}
          animate={{
            x: toggle ? 0 : -500,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`mobNav md:!-translate-x-0 rounded-xl md:flex flex-1 items-center`}
        >
          <ul className=" flex flex-col relative z-30 justify-between h-full list-none flex-1 navBarUl select-none md:flex-row  md:justify-center ">
            {navItems.map((el) => (
              <li
                className={`item ${path === `${el.to}` ? "active" : ""}`}
                key={el.id}
              >
                <Link href={el.to}>{el.name}</Link>
              </li>
            ))}
            <li className="item">
              <Link href={"/msh-learn"}>{t("learn")}</Link>
            </li>
          </ul>
          <button className="btn rounded-2xl py-3 capitalize px-6 mx-auto block font-extrabold tracking-wider">
            <span className="text">{t("dowenload")}</span>
            <span>{t("thx")}</span>
          </button>
        </motion.div>

        <motion.div
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 0.5,
          }}
          animate={{
            scale: 1,
          }}
          className="text-4xl cursor-pointer md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaWindowClose /> : <FaBurger />}
        </motion.div>
      </div>
    </nav>
  );
}
