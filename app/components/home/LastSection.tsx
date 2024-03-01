import Image from "next/image";
import iphonemocakp from "@app/assets/home/iphone-15w.png";
import google from "@app/assets/home/Btn-Download-Google-play.svg";
import apple from "@app/assets/home/Btn-Dwonload-App-Store.svg";
import Section from "../common/Section";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";
import { initScrollAnim } from "../../util/initScrolAnim";

export default function LastSection() {
  const t = useTranslations("homelasteSection");

  return (
    <Section className="flex flex-col-reverse md:flex-row items-center justify-between">
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -200 },
        }}
        // style
        className="w-full "
      >
        {/* text and bg-gradient */}
        <p
          className="w-11/12 mx-auto my-5 bg-gradient-to-bl from-indigo-950 to-black 
        lg:w-full rounded-lg p-5 text-2xl text-white leading-loose"
        >
          {t("title")}
        </p>

        {/* icon google play and app store */}
        <div className="flex justify-center w-2/5 mx-auto my-10 lg:flex-row items-center lg:w-1/2">
          <Image
            src={google}
            alt="google"
            className="cursor-pointer m-2 w-52"
          />
          <Image src={apple} alt="apple" className="cursor-pointer m-2 w-52" />
        </div>
      </motion.div>

      {/* img 2phone mocakp */}
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 200 },
        }}
        // style
        className="w-full md:w-[150%]"
      >
        <Image
          src={iphonemocakp}
          alt="2phone"
          className="w-11/12 block m-auto"
        />
      </motion.div>
    </Section>
  );
}
