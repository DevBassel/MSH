"use client";
import Nav from "@app/components/about/Nav";
import Footer from "@app/components/home/Footer";
import LastSection from "@app/components/about/LastSection";
import Section1 from "@app/components/about/Section-1";
import Section2 from "@app/components/about/Section-2";
import Section3 from "@app/components/about/Section-3";
import Section4 from "@app/components/about/Section-4";
import React from "react";

export default function About() {
  return (
    <main className="[&>section]:py-20">
      <Nav />

      <div className="bg-[url(/assets/learn/s1BG.png)] bg-cover mt-10 py-5 ">
        <Section1 />
      </div>

      <Section2 />

      <div className="bg-[url(/assets/learn/s1BG.png)] bg-cover ">
        <Section3 />
      </div>

      <Section4 />

      <LastSection />
      <Footer />
    </main>
  );
}
