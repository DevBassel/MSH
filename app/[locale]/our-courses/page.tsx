"use client";
import React from "react";
import CourseCard from "@app/components/msh-learn/CourseCard";

import Image from "next/image";
import Section from "@app/components/common/Section";
import { Link } from "@app/util/navigation";

export default function Our_course() {
  return (
    <>
      <div>
        <div className="flex justify-center my-5">
          <Link href={"/"}>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img loading="lazy" src="/assets/logos/learn_logo.svg" alt="logo" />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-white text-5xl flex justify-center my-10">
          Our Coures
        </h1>
      </div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </Section>
    </>
  );
}
