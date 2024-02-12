import Image from "next/image";
import s4 from "../../assets/home/s4.png";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { initScrollAnim } from "../../util/initScrolAnim";
import Button from "../common/Button";

export default function Section4() {
  const t = useTranslations("homeSection-4");

  return (
    <Section className="flex flex-col-reverse items-center justify-between md:flex-row">
      {/* info */}
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -200 },
        }}
        // style
        className="w-full lg:w-1/2 p-5 py-10   rounded-xl bg-gradient-to-br from-indigo-950"
      >
        <h1 className="text-white text-4xl pb-10 ">{t("title")}</h1>
        <p className="text-white ">{t("p")}</p>
        <Button
          text={t("btn")}
          className="bg-white text-black rounded-full py-3 px-10 font-extrabold mt-10"
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
        className="w-full md:w-1/2"
      >
        <Image src={s4} alt="s4" />
      </motion.div>
    </Section>
  );
}
