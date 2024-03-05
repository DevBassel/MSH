import Image from "next/image";
import s3_1 from "@app/assets/home/s3-1.png";
import s3_2 from "@app/assets/home/s3-2.png";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { initScrollAnim } from "@app/util/initScrolAnim";

export default function Section3() {
  const t = useTranslations("homeSection-3");

  return (
    <Section>
      <motion.h1
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -100 },
        }}
        // style
        className="text-center text-4xl mb-7"
      >
        {t("title")}
      </motion.h1>

      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 1.5 },
        }}
        // style
        className="flex s3 relative rounded-md
          m-auto w-full md:w-3/4 [&>button]:py-4 [&>button]:flex-1 text-xl bg-indigo-900"
      >
        <button>{t("investment")}</button>
        <button>{t("shears")}</button>
      </motion.div>

      {/* section images */}
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -200 },
        }}
        // style
        className="grid [&_img]:rounded-2xl grid-cols-1 md:grid-cols-2 [&>div]:p-4 [&>div]:rounded-xl [&>div]:h-full"
      >
        <div>
          <Image alt="s3Img" src={s3_1} className="max-h-full" />
        </div>

        <div>
          <Image alt="s3Img" src={s3_2} className="max-h-full" />
        </div>
      </motion.div>
    </Section>
  );
}
