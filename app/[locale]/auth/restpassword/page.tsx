"use client";
import React from "react";
import { MdPassword } from "react-icons/md";

export default function RestPassword() {
  return (
    <div className="w-full bg-[url(./assets/auth/BG.png)] bg-cover bg-white h-screen flex items-center justify-center">
      <div
        className="bg-gradient-to-t from-[#CB6CE6] to-[#1462CA] m-auto w-1/2 h-3/5 rounded-2xl
                    flex flex-col justify-center items-center"
      >
        <div
          className="flex items-center justify-center bg-white rounded-md overflow-hidden
                            py-2 pr-16"
        >
          <MdPassword className="text-2xl text-gray-600 mx-10" />
          <input
            type="email"
            className="focus:outline-none"
            placeholder="New Password"
            required
          />
        </div>
        <div
          className="flex items-center justify-center bg-white rounded-md overflow-hidden
                            py-2 pr-16 my-5"
        >
          <MdPassword className="text-2xl text-gray-600 mx-10" />
          <input
            type="email"
            className="focus:outline-none"
            placeholder="Confirm New Password"
            required
          />
        </div>

        <button
          className="mt-3 w-3/5 bg-blue-700 hover:bg-blue-900  text-white 
                            font-bold py-2 px-4 rounded-md"
        >
          Confirm
        </button>

        <p className="text-white my-5">Save your Password</p>
      </div>
    </div>
  );
}
