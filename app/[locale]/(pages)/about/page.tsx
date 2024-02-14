"use client";
import React from "react";
import Nav from "../../../components/about/Nav";
import Section1 from "../../../components/about/Section-1";
import Section2 from "../../../components/about/Section-2";
import Section3 from "../../../components/about/Section-3";
import Section4 from "../../../components/about/Section-4";
import LastSection from "../../../components/about/LastSection";
import Footer from "../../../components/home/Footer";

export default function About() {
  return (
    <main className="[&>section]:py-20">
      <Nav />

      <div className="bg-[url(./assets/learn/s1BG.png)] bg-cover mt-10 py-5 ">
        <Section1 />
      </div>

      <Section2 />

      <div className="bg-[url(./assets/learn/s1BG.png)] bg-cover ">
        <Section3 />
      </div>

      <Section4 />

      <LastSection />
      <Footer />
    </main>
  );
}
