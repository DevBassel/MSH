"use client";
import { useTranslations } from "next-intl";
import Section from "../common/Section";

export default function LastSection() {
  const t = useTranslations("learnLastSection");
  return (
    <Section className="[&_h1]:text-[#172774] [&_p]:mt-5 grid px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <article className="m-3">
        <h1 className="bg-[#FFC107] mx-auto rounded-full w-[200px] h-[200px] flex items-center justify-center  text-5xl">
          10+
        </h1>
        <p className="text-white text-center text-4xl px-2">
          {t("item1.title")}
        </p>
      </article>

      <article className="m-3">
        <h1 className="bg-[#FFC107] mx-auto rounded-full w-[200px] h-[200px] flex items-center justify-center  text-5xl">
          500+
        </h1>
        <p className="text-white text-center text-4xl px-2">
          {t("item2.title")}
        </p>
      </article>

      <article className="m-3">
        <h1 className="bg-[#FFC107] mx-auto rounded-full w-[200px] h-[200px] flex items-center justify-center  text-5xl">
          500K+
        </h1>
        <p className="text-white text-center text-4xl px-2">
          {t("item3.title")}
        </p>
      </article>
    </Section>
  );
}
