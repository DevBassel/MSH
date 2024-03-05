"use client";
import React from "react";
import Section from "../common/Section";
import Card from "./Card";
import Button from "../common/Button";
import { useTranslations } from "next-intl";

export default function Section2() {
  const t = useTranslations("aboutSection-2");
  return (
    <>
      <ul className="w-fit mx-auto mt-5 [&_button]:mr-3 relative text-white">
        <Button text={t("who")} />
        <Button text={t("our")} />
        <Button text={t("work")} />
      </ul>

      <Section className="py-7">
        <h1 className="text-5xl text-center my-14">{t("who")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
    </>
  );
}
