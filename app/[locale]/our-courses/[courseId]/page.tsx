"use client";
import Image from "next/image";
import CourseCard from "@app/components/msh-learn/CourseCard";
import { Link } from "@app/util/navigation";
import logo from "@app/assets/logos/learn_logo.svg";
import Button from "@app/components/common/Button";

export default function Coures({ params }: { params: { courseId: string } }) {
  return (
    <section className="w-full md:w-4/5 mx-auto  px-4">
      <Link href={"/"} className="block mx-auto w-fit my-3">
        <Image src={logo} alt="logo" className="w-14" />
      </Link>
      <div className="flex flex-col  md:flex-row overflow-auto relative">
        <div className=" md:sticky md:w-1/3 top-0">
          <h1 className="text-4xl capitalize text-center">investing</h1>
          <CourseCard removeReadMore={true} />
          <Button
            text="Watch"
            className="bg-gray-700 w-9/12 m-auto block hover:scale-110 transition-all duration-300"
          />
        </div>

        <p className="text-lg overflow-y-scroll text-slate-400 md:h-[500px] md:w-[100%] p-5 bg-slate-800 rounded-lg leading-relaxed ">
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing and typesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing and typesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing
          andpesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing and typesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing andpesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing and typesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing andpesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing and typesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing
          andpesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing and typesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing andpesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting industry simply dummy text of the printing
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
          industry simply dummy text of the printing and typesetting industry
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting industry simply dummy text
          of the printing and typesetting industry simply dummy text of the
          printing and typesetting...
        </p>
      </div>
    </section>
  );
}
