import React from "react";
import Nav from "../../../components/msh-learn/Nav";
import Section1 from "../../../components/msh-learn/Section-1";
import Section2 from "../../../components/msh-learn/Section-2";
import Footer from "../../../components/home/Footer";
import Section3 from "../../../components/msh-learn/Section-3";
import LastSection from "../../../components/msh-learn/LastSection";

export default function MSH_Learn() {
  return (
    <main>
      <div className="bg-[url(./assets/learn/s1BG.png)] bg-cover ">
        <Nav />
        <Section1 />
      </div>

      <Section2 />

      <Section3 />

      <div className="bg-[#172774]">
        <LastSection />
      </div>
      <Footer />
    </main>
  );
}
