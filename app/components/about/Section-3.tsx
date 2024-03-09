import Image from "next/image";
import Section from "../common/Section";
import Button from "../common/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import { Link } from "@app/util/navigation";
import { useTranslations } from "next-intl";

export default function Section3() {
  const t = useTranslations("aboutSection-3");
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between ">
      <div>
        <h1 className="text-5xl">{t("title")}</h1>
        <p className="text-sm my-5 leading-[2] w-full md:w-4/5">{t("text")}</p>
        <Link
          href={"auth/login"}
          className="flex group bg-white text-black px-5 items-center   w-fit rounded-full pr-4"
        >
          <Button text={t("join")} className="px-3 rounded-sm" />
          <PiArrowUpRightBold className="text-3xl transition-all group-hover:translate-x-1  group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="felx1">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/about/about.png" alt="about" />
      </div>
    </Section>
  );
}
