import Image from "next/image";
import CourseCard from "@app/components/msh-learn/CourseCard";
import { Link } from "@app/util/navigation";
import logo from "@app/assets/logos/learn_logo.svg";

export default function Coures({ params }: { params: { courseId: string } }) {
  return (
    <section className="w-full md:w-4/5 mx-auto text-white px-4">
      <Link href={"/"} className="block mx-auto w-fit my-3    ">
        <Image src={logo} alt="logo" className="w-14" />
      </Link>
      <div className="flex flex-col md:flex-row  overflow-auto relative">
        <div className=" md:sticky top-0">
          <h1 className="text-5xl capitalize text-center  ">investing</h1>
          <CourseCard removeReadMore={true} />
        </div>

        <p className="text-md  md:h-[500px] p-5  leading-relaxed font-mono">
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
