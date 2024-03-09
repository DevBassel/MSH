"use client";
import React from "react";
import Button from "../common/Button";
import Image from "next/image";

import { Link } from "@app/util/navigation";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("aboutNav");
  return (
    <nav className=" w-[95%] m-auto  backdrop-blur-lg bg-opacity-35 rounded-full text-white p-1.5 px-5 pt-6">
      <div className="m-auto capitalize flex items-center text-black  justify-between p-1">
        <Button text={t("demo")} className="bg-white  " />
        <Button text={t("getApp")} className="bg-[#FFC107] " />
      </div>

      <Link href="/" className=" block mx-auto w-fit">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          loading="lazy"
          src="/assets/logos/learn_logo.svg"
          alt="learn logo"
          className="block mx-auto -mt-14 cursor-pointer"
        />
      </Link>
    </nav>
  );
}
