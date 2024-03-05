"use client";

import NavBar from "../components/common/NavBar";
import Footer from "../components/home/Footer";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import LastSection from "../components/home/LastSection";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "@app/components/home/Section5";
import { useState } from "react";
import Section6 from "@app/components/home/Section6";
import Section7 from "@app/components/home/Section7";
import Chat from "@app/components/chatBot/Chat";
import { RiChatVoiceLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Home() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <main className="[&>section]:py-20">
      <NavBar />

      {/* chat bot */}

      {/* open chat icon */}

      <motion.div
        initial={{ x: 100, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 text-6xl cursor-pointer text-white z-[12]"
      >
        {openChat ? (
          <>
            <AiFillCloseCircle
              className="z-50"
              onClick={() => {
                document.body.style.overflow = "auto";
                setOpenChat(false);
              }}
            />
          </>
        ) : (
          <RiChatVoiceLine
            onClick={() => {
              setOpenChat(true);
              document.body.style.overflow = "hidden";
            }}
          />
        )}
      </motion.div>

      {openChat && <Chat />}

      {/* intro */}
      <Section1 />

      {/* details */}
      <Section2 />

      {/* What investments */}
      <Section3 />

      {/* Investing Build */}
      <Section4 />

      {/* top companies */}
      <Section5 />

      {/* services */}
      <Section6 />

      {/* The easiest way to invest */}
      <Section7 />

      <LastSection />

      <Footer />
    </main>
  );
}
