"use client";
import Image from "next/image";
import Nav from "@app/components/about/Nav";
import Section from "@app/components/common/Section";
import img from "@app/assets/feeds/feed-1.jpg";
import Button from "@app/components/common/Button";
export default function page() {
  return (
    <>
      <Nav />
      <Section className="md:h-[calc(100vh_-_150px)]">
        <h2 className="text-2xl capitalize mb-10">Company</h2>
        <div className="flex flex-col md:flex-row  overflow-auto ">
          <div className="w-full md:w-1/3 h-full md:sticky top-0">
            <div className="h-1/2 relative">
              <Image
                src={img}
                alt="company"
                className="h-full w-full object-cover rounded-2xl"
              />
              <div className="absolute top-0 left-0 p-3 bg-black bg-opacity-80 w-full h-full ">
                <h5 className="text-xl capitalize tracking-wide flex items-center">
                  <span className="p-1.5 bg-[#172774] mr-2 rounded-full"></span>
                  name
                </h5>
              </div>
            </div>
            <Button
              text="Invest now"
              className="bg-[#FFC107] text-black px-6 mt-3 w-full text-xl"
            />
          </div>

          <p className="text-md flex-1 h-[350px] p-5  leading-relaxed ">
            simply dummy text of the printing and typesetting industry simply
            dummy text of the printing and typesetting industry simply dummy
            text of the printing and typesetting industry simply dummy text of
            the printing and typesetting industry simply dummy text of the
            printing and typesetting industry simply dummy text of the printing
            and typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting industry simply dummy text of the printing and
            typesetting
          </p>
        </div>
      </Section>
    </>
  );
}
