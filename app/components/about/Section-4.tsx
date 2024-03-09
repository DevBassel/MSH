import Image from "next/image";
import Section from "../common/Section";
import CourseCard from "../msh-learn/CourseCard";
import { useTranslations } from "next-intl";

export default function Section4() {
  const t = useTranslations("aboutSection-4");
  const commn = useTranslations("aboutSection-2");

  return (
    <Section>
      <h1 className="text-5xl text-center">{commn("our")}</h1>
      <div className="flex justify-between items-center mt-16">
        <div className="">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img loading="lazy" src="/assets/about/about.png" alt="ourImg" />
        </div>

        <p className="w-full md:w-1/2 text-sm leading-[1.9]">{t("text")}</p>
      </div>

      <h1 className="text-3xl  text-center mt-40 mb-20">{t("tool")}</h1>
      <div className="flex justify-between ">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/learn/3-1.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/learn/3-2.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/learn/3-3.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/learn/3-4.png" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/learn/3-5.png" alt="" />
      </div>

      <h2 className="text-center text-3xl mt-40 mb-20">{t("course")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </Section>
  );
}
