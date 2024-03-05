import Image from "next/image";
import Section from "../common/Section";
import ourImg from "@app/assets/about/about.png";
import img3_1 from "@app/assets/learn/3-1.svg";
import img3_2 from "@app/assets/learn/3-2.svg";
import img3_3 from "@app/assets/learn/3-3.svg";
import img3_4 from "@app/assets/learn/3-4.svg";
import img3_5 from "@app/assets/learn/3-5.svg";
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
          <Image src={ourImg} alt="ourImg" />
        </div>

        <p className="w-full md:w-1/2 text-sm leading-[1.9]">{t("text")}</p>
      </div>

      <h1 className="text-3xl  text-center mt-40 mb-20">{t("tool")}</h1>
      <div className="flex justify-between ">
        <Image src={img3_1} alt="" />
        <Image src={img3_2} alt="" />
        <Image src={img3_3} alt="" />
        <Image src={img3_4} alt="" />
        <Image src={img3_5} alt="" />
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
