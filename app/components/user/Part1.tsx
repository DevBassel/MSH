"use client";
import { GiWallet } from "react-icons/gi";
import Button from "../common/Button";
import { BsFilePostFill, BsPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import { Link } from "@app/util/navigation";
import { useTranslations } from "next-intl";

export default function Part1() {
  const t = useTranslations("dash");

  return (
    <div
      className="grid grid-cols-12 gap-2
    [&>div]:bg-gradient-to-r [&>div]:from-[#3100F4] [&>div]:to-[#14BB9D]
    [&>div]:rounded-xl [&>div]:flex [&>div]:flex-col [&>div]:justify-between [&>div]:items-center
    [&_svg]:text-[#FFC107] [&_svg]:text-6xl [&>div]:py-2"
    >
      <div className="col-span-7">
        <div className="flex justify-center flex-col items-center">
          <GiWallet />
          <h4 className="text-xl capitalize font-bold">{t("total")}</h4>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-3">
          <h6 className="text-xl mr-2 font-bold">$ 254.39 EG</h6>
          <Button text="Transactions" className="bg-[#FFC107] text-black" />
        </div>
      </div>

      <div className="col-span-5">
        <Link href={"/me/change"}>
          <div className="flex items-center h-full flex-shrink flex-col">
            <BsPersonLinesFill className="my-4" />
            <h4 className="text-xl capitalize text-center font-bold">
              {t("change")}
            </h4>
          </div>
        </Link>
      </div>

      <div className="col-span-4 text-center">
        <Link href={"/msh-learn"}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            loading="lazy"
            src="/assets/learn/learn.png"
            alt="learn"
            className="block mx-auto mb-4"
          />
          <h4 className="text-xl capitalize font-bold">{t("learn")}</h4>
        </Link>
      </div>

      <div className="col-span-4">
        <Link href={"/me/feeds"}>
          <BsFilePostFill className="flex items-center justify-center mb-4" />
          <h4 className="text-xl capitalize text-center font-bold">
            {t("feed")}
          </h4>
        </Link>
      </div>

      <div className="col-span-4">
        <Link href={"/me/feeds/companys"}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            loading="lazy"
            src="/assets/companys.png"
            alt="company"
            className="block mx-auto"
          />
          <h4 className="text-xl capitalize font-bold">{t("companys")}</h4>
        </Link>
      </div>
    </div>
  );
}
