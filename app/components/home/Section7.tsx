import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Button from "../common/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { initScrollAnim } from "@app/util/initScrolAnim";
export default function Section7() {
  const t = useTranslations("homeSection-7");
  return (
    <Section className="flex flex-col-reverse  justify-between items-stretch md:flex-row">
      {/* info */}
      {/* div text (h1-p) and button */}
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -200 },
        }}
        // style
        className="bg-gradient-to-br from-indigo-950 to-black
          rounded-xl p-5 mt-5 md:mt-0 w-full md:w-1/2 flex flex-col items-center md:justify-between "
      >
        <h1 className=" text-4xl leading-[1.5]">{t("title")}</h1>

        <p>{t("p")}</p>

        <Button
          text={t("btn")}
          className=" text-white bg-[#172774] rounded-full mt-10 hover:bg-gradient-to-br from-indigo-950 to-black"
        />
      </motion.div>

      {/* section image */}
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 200 },
        }}
        // style
        className="w-full md:w-1/2 "
      >
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          loading="lazy"
          src="/assets/home/7-1.png"
          alt="s4"
          className="max-w-full block mx-auto"
        />
      </motion.div>
    </Section>
  );
}
