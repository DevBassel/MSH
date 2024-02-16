"use client";
import Header from "../../../components/user/Header";
import Part1 from "../../../components/user/Part1";
import Part2 from "../../../components/user/Part2";
import Part3 from "../../../components/user/Part3";
import Part4 from "../../../components/user/Part4";
import Part5 from "../../../components/user/Part5";

export default function Profile() {
  return (
    <main className="text-white">
      <Header />

      <section className="w-11/12 mx-auto pt-4 flex flex-col lg:flex-row lg:h-[calc(100vh_-_80px)]">
        <div className="md:flex-[0.5]">
          <Part1 />
          <Part2 />
        </div>
        <div className="md:flex-[0.5] px-5">
          <Part3 />
          <Part4 />
          <Part5 />
        </div>
      </section>
    </main>
  );
}
