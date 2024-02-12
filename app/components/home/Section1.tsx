import Image from "next/image";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import ThreePhone from "../../assets/home/3-1.png";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { initScrollAnim } from "../../util/initScrolAnim";
import { Link } from "../../util/navigation";
export default function Section1() {
  const router = useRouter();
  const t = useTranslations("homeSection-1");

  return (
    <Section className="flex items-center justify-between flex-col-reverse md:flex-row">
      {/* Section half text (h1-p) button next half img and shape */}

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
          rounded-xl p-9 mt-5 md:mt-0"
      >
        <h1 className="text-white text-5xl pb-10">{t("title")}</h1>

        <p className="text-white">{t("p")}</p>

        {/* btn to login */}
        <Link href={"/auth/login"}>
          <Button
            text={t("btn")}
            className=" text-white bg-violet-950 rounded-md mt-10 hover:bg-gradient-to-br from-indigo-950 to-black"
          />
        </Link>
      </motion.div>

      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 200 },
        }}
        // style
        className="w-full lg:w-1/2 flex justify-center "
      >
        <Image src={ThreePhone} alt="phone" className="max-w-full" />
      </motion.div>
    </Section>
  );
}
