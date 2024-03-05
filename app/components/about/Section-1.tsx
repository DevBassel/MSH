import { useTranslations } from "next-intl";
import Section from "../common/Section";

export default function Section1() {
  const t = useTranslations("aboutSection-1");

  return (
    <Section className="text-center px-2 md:px-36">
      <h1 className="text-5xl">{t("title")}</h1>
      <p className="text-sm my-10">{t("text")}</p>
    </Section>
  );
}
