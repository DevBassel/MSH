import { useTranslations } from "next-intl";
import Section from "../common/Section";

export default function LastSection() {
  const t = useTranslations("aboutSection-2");
  return (
    <Section>
      <h1 className="text-5xl mb-20 text-center">{t("work")}</h1>
      <div className="grid grid-cols-2 [&>div]:m-3 [&>div]:bg-white [&>div]:h-[400px] [&>div]:rounded-lg">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </Section>
  );
}
