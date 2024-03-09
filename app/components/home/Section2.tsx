"use client";

import { BiUser } from "react-icons/bi";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { initScrollAnim } from "@app/util/initScrolAnim";

export default function Section2() {
  const t = useTranslations("homeSection-2");

  // from backend
  const cards = [
    {
      id: 1,
      text: "Trader account",
      icon: <BiUser />,
      total: 100,
    },
    {
      id: 2,
      text: "Monthly transaction",
      icon: <BiUser />,
      total: 35,
    },
    {
      id: 3,
      text: "(Million) Average monthly payments",
      icon: <BiUser />,
      total: 23,
    },
    {
      id: 4,
      text: "(million) monthly trading volume",
      icon: <BiUser />,
      total: 255,
    },
  ];

  return (
    <Section className="grid grid-cols-1 md:grid-cols-2  gap-3 [&>div>div]:rounded-3xl justify-center">
      {/* info  */}
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -200 },
        }}
        // style
        className="p-10 pt-96  bg-[url(/assets/home/s3-bg.png)] rounded-3xl bg-no-repeat bg-cover"
      >
        <h3 className="text-4xl font-extrabold ">150+</h3>
        <p className="text-sm">{t("title")}</p>
      </motion.div>

      {/* cards grid */}
      <div className="grid md:w-auto m-auto grid-cols-2 h-full items-stretch   capitalize">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            // animation
            {...initScrollAnim}
            transition={{ delay: i / 10 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
            // style
            className="bg-[#1B1B1B] m-2 flex flex-col justify-center md:justify-between md:items-start bg-gradient-to-br from-gray-900- to-black p-4"
          >
            <div className="text-8xl text-[#1C274C]">{card.icon}</div>
            <h4 className="text-2xl font-extrabold">{card.total}+</h4>
            <p className="text-xs"> {card.text} </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
