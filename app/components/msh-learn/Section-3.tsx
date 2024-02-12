"use client";
import Image from "next/image";
import Section from "../common/Section";
import img3_1 from "../../assets/learn/3-1.svg";
import img3_2 from "../../assets/learn/3-2.svg";
import img3_3 from "../../assets/learn/3-3.svg";
import img3_4 from "../../assets/learn/3-4.svg";
import img3_5 from "../../assets/learn/3-5.svg";
import { motion } from "framer-motion";
import { initScrollAnim } from "../../util/initScrolAnim";
import { useTranslations } from "next-intl";

export default function Section6() {
  const t = useTranslations("homeSection-6");

  const articles = [
    {
      id: 1,
      image: img3_1,
      title: t("item1.title"),
      text: t("item1.p"),
    },
    {
      id: 2,
      image: img3_2,
      title: t("item2.title"),
      text: t("item2.p"),
    },
    {
      id: 3,
      image: img3_3,
      title: t("item3.title"),
      text: t("item3.p"),
    },
    {
      id: 4,
      image: img3_4,
      title: t("item4.title"),
      text: t("item4.p"),
    },
    {
      id: 5,
      image: img3_5,
      title: t("item4.title"),
      text: t("item4.p"),
    },
  ];
  return (
    <Section className="[&>article]:mb-20 ">
      {/* services Section */}
      {articles.map((el, i) => (
        <article
          key={i}
          className="flex items-center justify-center flex-col md:flex-row "
        >
          {/* article image */}
          <motion.div
            // animation
            {...initScrollAnim}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            // style
            className=" mb-9 md:m-0 w-1/6"
          >
            <Image
              src={el.image}
              alt="articleImag"
              className="max-w-full max-h-full "
            />
          </motion.div>

          {/* article info */}
          <div className="ml-5 flex-1">
            {/* title */}
            <motion.h3
              // animation
              {...initScrollAnim}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -50 },
              }}
              // style
              className="text-2xl md:text-3xl font-extrabold"
            >
              {el.title}
            </motion.h3>

            {/* paragraph */}
            <motion.p
              // animation
              {...initScrollAnim}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              // style
              className="font-light mt-3 w-full md:w-11/12 text-sm"
            >
              {el.text}
            </motion.p>
          </div>
        </article>
      ))}
    </Section>
  );
}
