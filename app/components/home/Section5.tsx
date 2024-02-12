import Image from "next/image";
import s5 from "../../assets/home/s5.png";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { initScrollAnim } from "../../util/initScrolAnim";

export default function Section5() {
  return (
    <Section className="flex flex-col md:flex-row container m-auto items-center justify-between">
      {/* section image */}
      <motion.div
        // animation
        {...initScrollAnim}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -200 },
        }}
        // style
        className="w-full md:w-1/2 "
      >
        <Image src={s5} alt="s4" className="max-h-full" />
      </motion.div>

      {/* cards grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 w-full md:w-1/2
        [&>div]:m-2 [&>div]:h-44 [&>div]:rounded-2xl [&>div]:bg-[#1C274C] grid-rows-3"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => (
          <motion.div
            key={i}
            // animation
            {...initScrollAnim}
            transition={{ delay: i / 10 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
            // style
          >
            {el}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
