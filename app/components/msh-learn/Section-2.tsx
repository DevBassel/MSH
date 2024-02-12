"use client";
import Section from "../common/Section";
import CourseCard from "./CourseCard";
import { useTranslations } from "next-intl";
import Button from "../common/Button";
import { Link } from "../../util/navigation";


export default function Section2() {
  const t = useTranslations("learnSection-2");
  return (
    <Section>
      <h1 className="text-5xl text-center mb-10">{t("title")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      <Link href="/our-coures" replace><Button
        text={t("viewAll")}
        className="bg-white bg-opacity-50 hover:scale-105 transition-all
        text-black block text-2xl w-3/5 mt-10 mx-auto rounded-full"/></Link>
    </Section>
  );
}
