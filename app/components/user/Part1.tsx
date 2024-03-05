"use client";
import { GiWallet } from "react-icons/gi";
import Button from "../common/Button";
import { BsFilePostFill, BsPersonLinesFill } from "react-icons/bs";
import learn from "@app/assets/learn/learn.svg";
import Image from "next/image";
import companys from "@app/assets/companys.svg";
import { Link } from "@app/util/navigation";

export default function Part1() {
  return (
    <div
      className="grid grid-cols-12  gap-2
    [&>div]:bg-gradient-to-r [&>div]:from-[#3100F4] [&>div]:to-[#14BB9D]
    [&>div]:rounded-2xl [&>div]:flex [&>div]:flex-col [&>div]:justify-between [&>div]:items-center
    [&_svg]:text-[#FFC107] [&_svg]:text-6xl [&>div]:py-2
    "
    >
      <div className="col-span-7">
        <div className="flex justify-center flex-col items-center">
          <GiWallet />
          <h4 className="text-xl capitalize">Total Balance</h4>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-3">
          <h6 className="text-xl mr-2">$ 254.39 EG</h6>
          <Button text="Transactions" className="bg-[#FFC107] text-black" />
        </div>
      </div>

      <div className="col-span-5">
        <Link href={"/me/change"}>
          <div className="flex justify-center h-full flex-shrink flex-col items-center">
            <BsPersonLinesFill />
            <h4 className="text-xl capitalize">
              Change <br /> Personal
            </h4>
          </div>
        </Link>
      </div>

      <div className="col-span-4 text-center">
        <Link href={"/msh-learn"}>
          <Image src={learn} alt="learn" className="block mx-auto" />
          <h4 className="text-xl capitalize">MSH Learn</h4>
        </Link>
      </div>

      <div className="col-span-4">
        <Link href={"/me/feeds"}>
          <BsFilePostFill />
          <h4 className="text-xl capitalize">Feed</h4>
        </Link>
      </div>

      <div className="col-span-4">
        <Link href={"/me/feeds/companys"}>
          <Image src={companys} alt="company" className="block mx-auto" />
          <h4 className="text-xl capitalize">Companys</h4>
        </Link>
      </div>
    </div>
  );
}
