import Image from "next/image";
import Section from "../../../../components/common/Section";
import CourseCard from "../../../../components/msh-learn/CourseCard";
import { Link } from "../../../../util/navigation";
import logo from "../../../../assets/logos/learn_logo.svg";

export default function Coures({ params }: { params: { courseId: string } }) {
  return (
    <section className="w-full md:w-4/5 mx-auto text-white px-4">
      <Link href={"/"} className="block mx-auto w-fit my-3    ">
        <Image src={logo} alt="logo" className="w-14" />
      </Link>
      <div className="flex flex-col md:flex-row  overflow-auto relative">
        <div className="w-1/3 md:sticky top-0">
          <h1 className="text-5xl capitalize text-center  ">investing</h1>
          <CourseCard />
        </div>

        <p className="text-md flex-1 h-[500px] p-5  leading-relaxed font-mono">
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
          and typesetting industry simply dummy text of the printing and
          typesetting industry simply dummy text of the printing and typesetting
        </p>
      </div>
    </section>
  );
}
