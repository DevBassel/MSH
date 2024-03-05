import Image from "next/image";
import Section from "../common/Section";
import Button from "../common/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import aboutImg from "@app/assets/about/about.png";
import { Link } from "@app/util/navigation";

export default function Section3() {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between ">
      <div>
        <h1 className="text-5xl">MSH Members</h1>
        <p className="text-sm my-5 leading-[2] w-full md:w-4/5">
          simply dummy text of the printing and typesetting industry simply
          dummy text of the printing and typesetting
        </p>
        <Link
          href={"auth/login"}
          className="flex group bg-white text-black  te items-center  w-fit rounded-full pr-4"
        >
          <Button text="Join Now" className="px-6 rounded-sm" />
          <PiArrowUpRightBold className="text-3xl transition-all group-hover:translate-x-1  group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="felx1">
        <Image src={aboutImg} alt="about" />
      </div>
    </Section>
  );
}
