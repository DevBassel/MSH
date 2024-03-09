"use client";
import Image from "next/image";
import Button from "../common/Button";
import { Link } from "@app/util/navigation";

export default function CompanyCard() {
  return (
    <article className="grid grid-cols-6 my-10">
      <div className="col-span-6 md:col-span-3 lg:col-span-2 h-full relative">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          loading="lazy"
          src="/assets/feeds/feed-1.jpg"
          alt="company"
          className="h-full w-full object-cover rounded-2xl"
        />
        <div className="absolute top-0 left-0 p-3 bg-black bg-opacity-80 w-full h-full ">
          <h5 className="text-xl capitalize tracking-wide flex items-center">
            <span className="p-1.5 bg-[#172774] mr-2 rounded-full"></span>
            name
          </h5>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 ml-10 py-3">
        <h2 className="text-3xl mb-6">Lorem MG</h2>
        <p className="leading-[1.8] ">
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry
        </p>
        <Link href={"companys/1"}>
          <Button
            text="Invest now"
            className="bg-[#FFC107] text-black px-6 mt-3 text-xl"
          />
        </Link>
      </div>
    </article>
  );
}
