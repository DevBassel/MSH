import { motion } from "framer-motion";
import React, { MouseEvent, useRef, useState } from "react";
import { GrRobot } from "react-icons/gr";
import { IoSend } from "react-icons/io5";

interface QI {
  id: number;
  Q: string;
  A: string;
}

// from backend
const initialQuestions: QI[] = [
  {
    id: 1,
    Q: "Question1?",
    A: "is an answer 1",
  },
  {
    id: 2,
    Q: "Question 2?",
    A: "is an answer 2",
  },
  {
    id: 3,
    Q: "Contact customer service?",
    A: "is an answer 3",
  },
];

const Chat: React.FC = () => {
  const [answers, setAnswers] = useState<QI[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const msgClassName =
    "mb-3 text-sm bg-gradient-to-r from-[#172774] break-all  max-w-full text-ellipsis w-fit  px-5 text-white rounded-2xl p-2 font-extrabold";

  const QclassName = msgClassName + " to-[#CB6CE6]";

  const AClassName = msgClassName + " mr-0 ml-auto to-[#0B1338]";

  function handleAnswer(e: MouseEvent<HTMLLIElement>, answer: string) {
    if (e.currentTarget.textContent) {
      setAnswers([
        ...answers,
        { id: Date.now(), Q: e.currentTarget.textContent, A: answer },
      ]);
      setTimeout(
        () => scrollRef.current?.scrollIntoView({ behavior: "smooth" }),
        0
      );
    }
  }

  const renderQuestions = (array: QI[]) => (
    <ul>
      {array.map((item, i) => (
        <motion.li
          // animation
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i / 10 }}
          // style and event
          onClick={(e) => handleAnswer(e, item.A)}
          className={QclassName + " cursor-pointer "}
          key={item.id}
        >
          {item.Q}
        </motion.li>
      ))}
    </ul>
  );

  const renderAnswers = (array: QI[]) => (
    <>
      <ul>
        {array.map((item, i) => (
          <>
            <motion.li
              // animation
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={AClassName}
              key={item.id}
            >
              {item.Q}
            </motion.li>

            <motion.li
              // animation
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={QclassName}
              key={i}
            >
              {item.A}
            </motion.li>
          </>
        ))}
      </ul>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        className="bg-white h-[1px] my-5"
      ></motion.div>
      {array.length ? renderQuestions(initialQuestions) : null}
    </>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 h-screen backdrop-blur-lg z-[11] w-full"
    >
      <motion.div
        // animation
        initial={{ scale: 0 }}
        animate={{ scale: 1, right: 10 }}
        // style
        className={`absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-24 overflow-hidden top-3 h-[80%] w-11/12 md:w-[40%] bg-gradient-to-b from-[#120018] to-[#1B1B29] bg-opacity-50 rounded-3xl flex flex-col`}
      >
        <div className="bg-black p-1 text-white flex items-center">
          <GrRobot className="text-5xl text-[#FFC107] mr-5 border-2 rounded-full p-1" />
          <h2>
            <span className="text-2xl text-[#FFC107] font-extrabold">
              Hello,
            </span>
            I am here to help you
          </h2>
        </div>
        <div className="p-4 flex-1 overflow-y-scroll">
          {!answers.length ? renderQuestions(initialQuestions) : null}

          {renderAnswers(answers)}
          <div ref={scrollRef}></div>
        </div>
        <div className="m-3 flex px-2 rounded-full bg-white overflow-hidden items-center">
          <input
            type="text"
            placeholder="Send a message"
            className="focus:outline-none p-2 flex-1"
          />
          <IoSend className="text-3xl cursor-pointer" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Chat;
