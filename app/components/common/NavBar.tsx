"use client";
import Image from "next/image";
import logo from "@app/assets/logos/home_logo.svg";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@app/util/navigation";
import Button from "./Button";

export default function NavBar() {
  const locate = useLocale();

  const t = useTranslations("NavBar");

  const changLocate = locate === "en" ? "ar" : "en";
  const navItems = [
    {
      id: 1,
      name: t("home"),
      to: "/",
    },
    {
      id: 2,
      name: t("about"),
      to: "/about",
    },
  ];
  return (
    <nav className="sticky w-[95%]  z-10  top-3 m-auto  backdrop-blur-lg bg-[#a7a] bg-opacity-35  rounded-full text-white p-1.5 px-5">
      <div className=" container m-auto capitalize flex items-center justify-around p-1">
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
        <div>
          <Image src={logo} alt="logo" className="w-2/3 h-2/3" />
        </div>
        <div className={`  flex  flex-1 items-center justify-end  `}>
          <ul className=" hidden md:flex list-none   flex-1 navBarUl select-none md:flex-row  justify-center ">
            {navItems.map((el) => (
              <li className="item" key={el.id}>
                <Link href={el.to}>{el.name}</Link>
              </li>
            ))}
            <li className="item">
              <Link href={"/msh-learn"}>{t("learn")}</Link>
            </li>
          </ul>
        </div>
        <button className="btn rounded-2xl py-3 capitalize px-6 font-extrabold tracking-wider">
          <span className="text">{t("dowenload")}</span>
          <span>{t("thx")}</span>
        </button>
      </div>
    </nav>
  );
}
