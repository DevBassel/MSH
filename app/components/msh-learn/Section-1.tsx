"use client";
import { useTranslations } from "next-intl";
import Section from "../common/Section";
import { MotionProps, motion } from "framer-motion";
import Button from "../common/Button";

export default function Section1() {
  const t = useTranslations("learnSection-1");

  const popup: MotionProps = {
    initial: {
      padding: 0,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      padding: "0.25rem",
    },
    transition: {
      delay: 1,
    },
  };

  return (
    <Section className="text-center py-18  px-10 lg:px-52   relative">
      <div className="absolute left-1 top-16">
        <motion.div
          initial={{ width: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          animate={{ width: "200px" }}
          className="h-[2px] w-[200px] bg-white absolute left-0"
        >
          <motion.span
            {...popup}
            className="p-1  bg-white absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rounded-full  "
          ></motion.span>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          animate={{ height: "200px" }}
          className="w-[2px] h-[200px] bg-white absolute"
        >
          <motion.span
            {...popup}
            className="p-1 bg-white absolute bottom-0 translate-y-1/2 right-1/2 translate-x-1/2 rounded-full  "
          ></motion.span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "linear" }}
      >
        <h1 className="text-4xl mx-auto mb-3">{t("title")}</h1>

        <p className="text-sm">{t("text")}</p>

        <div className="flex justify-evenly mt-20">
          <Button text={t("getApp")} className="bg-[#FFC107] text-black" />
          <Button text={t("demo")} className="bg-white text-black" />
        </div>
      </motion.div>

      <div className="absolute bottom-3 right-1">
        <motion.div
          initial={{ height: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          animate={{ height: "200px" }}
          className="w-[2px] h-[200px] bg-white absolute right-0 bottom-0"
        >
          <motion.span
            {...popup}
            className="p-1  bg-white absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2 rounded-full  "
          ></motion.span>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          animate={{ width: "200px" }}
          className="h-[2px] w-[200px] bg-white absolute right-0 bottom-0"
        >
          <motion.span
            {...popup}
            className="p-1 bg-white absolute bottom-0 translate-y-1/2 left-1 -translate-x-1/2 rounded-full  "
          ></motion.span>
        </motion.div>
      </div>
    </Section>
  );
}
