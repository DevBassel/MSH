"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logos/logo.png";
import Webcam from "react-webcam";

export default function CardId() {
  const webcamRef = useRef<Webcam | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  return (
    <main className="bg-[url(./assets/auth/BG.png)] flex items-center h-screen bg-cover">
      <div className="container m-auto w-4/5 h-4/5 flex rounded-2xl overflow-hidden">
        <div className="first flex flex-1 items-center bg-zinc-300 w-2/4">
          <div className="flex-1 flex-col">
            <h1 className="text-blue-900 font-extrabold text-4xl text-center">
              ID CARD
            </h1>
            {isClient && (
              <Webcam
                screenshotFormat="image/jpeg"
                className="w-3/4 m-auto rounded-md my-8"
                ref={webcamRef as unknown as React.RefObject<Webcam>}
              />
            )}
            <button
              onClick={() => {
                console.log(
                  webcamRef.current?.getScreenshot({
                    width: 1920,
                    height: 1080,
                  })
                );
              }}
              className="block m-auto px-7 py-2 text-2xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80"
            >
              Take
            </button>
          </div>
        </div>
        <div className="second hidden md:flex items-center justify-center bg-gradient-to-t from-[#CB6CE6] to-[#1462CA] w-2/4">
          <Image className="scale-75" src={logo} alt="logoSide" />
        </div>
      </div>
    </main>
  );
}
