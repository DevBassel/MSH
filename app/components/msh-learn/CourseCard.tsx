"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "../common/Button";
import { Link } from "@app/util/navigation";

export default function CourseCard({
  removeReadMore,
}: {
  removeReadMore?: boolean;
}) {
  const t = useTranslations("learnSection-2");
  return (
    <article className="bg-white rounded-3xl overflow-hidden m-3">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        loading="lazy"
        src="/assets/home/s3-2.png"
        alt="course"
        className="object-cover"
      />
      <div className="px-4 py-2 bg-gradient-to-br from-[#172774] to-[#726FE1]">
        <h3 className="text-xl">Lorem Ipsum</h3>
        <p className="text-sm">
          simply dummy text of the printing and typesetting industry...
        </p>

        {!removeReadMore && (
          <Link href={"our-courses/1"}>
            <Button
              text={t("readMore")}
              className="bg-black text-white w-full mt-5  hover:bg-white hover:text-black transition-all"
            />
          </Link>
        )}
      </div>
    </article>
  );
}
