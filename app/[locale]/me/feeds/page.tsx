"use client";
import Nav from "@app/components/about/Nav";
import { StaticImageData } from "next/image";
import { BsArrowBarRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "@app/util/navigation";
import FeedItem from "@app/components/feeds/FeedItem";

export default function Feeds() {
  const items: {
    id: number;
    name: string;
    text: string;
    img: string;
  }[] = [
    {
      id: 1,
      name: "item name",
      text: "simply dummy text of the printing and typesetting industry",
      img: "/assets/feeds/feed-1.jpg",
    },
    {
      id: 2,
      name: "item name",
      text: "simply dummy text of the printing and typesetting industry",
      img: "/assets/feeds/feed-2.jpg",
    },
    {
      id: 3,
      name: "item name",
      text: "simply dummy text of the printing and typesetting industry",
      img: "/assets/feeds/feed-3.jpg",
    },
    {
      id: 4,
      name: "item name",
      text: "simply dummy text of the printing and typesetting industry",

      img: "/assets/feeds/feed-4.jpg",
    },
    {
      id: 4,
      name: "item name",
      text: "simply dummy text of the printing and typesetting industry",
      img: "/assets/feeds/feed-5.jpg",
    },
  ];
  return (
    <>
      <Nav />
      <main className="text-white">
        <section className="text-3xl py-0 w-full md:w-4/5 mx-auto text-white px-4 ">
          <div className="flex flex-col md:flex-row justify-between  px-5 mb-4 capitalize">
            <h3 className="border-l pl-5">Top News </h3>

            <Link
              href={"feeds/companys"}
              className="cursor-pointer group flex items-center justify-between"
            >
              all Company
              <BsArrowBarRight className="ml-3 group-hover:translate-x-3 transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-5 [&_div]:rounded-xl md:h-[calc(100vh_-_180px)] text-red-800">
            {items.map((el, i) => (
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                transition={{ delay: i / 10, duration: 1 }}
                animate={{ scaleY: 1, opacity: 1 }}
                key={el.id}
                className={`bg-white   relative overflow-hidden text-white bg-cover cursor-pointer m-1 row-span-${
                  [2, 1, 5, 4, 3][i]
                }`}
              >
                <FeedItem {...el} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
