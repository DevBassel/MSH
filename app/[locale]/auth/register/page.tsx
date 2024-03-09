"use client";
import React, { useState } from "react";
import { MdEmail, MdPassword, MdPhone, MdVerifiedUser } from "react-icons/md";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "@app/util/navigation";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  return (
    // Login page (Apple - google)
    // First section (BG) for make a hero section
    // we made this with tailwind
    <main className="bg-[url(/assets/auth/BG.png)] flex items-center h-screen bg-cover">
      <div className="container m-auto w-4/5  flex rounded-2xl overflow-hidden">
        {/* login half (Apple - google) */}
        <div className="first flex flex-col flex-1 items-center bg-zinc-300 py-3 w-2/4">
          <h1 className="text-center text-3xl font-bold mt-6">
            Register To Your Account
          </h1>

          <form className="w-4/5 m-auto">
            {/* First input (Name) */}
            <div
              className="flex items-center justify-center bg-white rounded-md overflow-hidden
            p-4 my-3"
            >
              <MdVerifiedUser className="text-2xl text-gray-600" />
              <input
                type="Name"
                className="flex-1 rounded-md overflow-hidden
              focus:outline-none px-7"
                placeholder="Full Name"
                required
              />
            </div>
            {/* input (Email) */}
            <div
              className="flex items-center justify-center bg-white rounded-md overflow-hidden
            p-4 my-3"
            >
              <MdEmail className="text-2xl text-gray-600" />
              <input
                type="email"
                className="flex-1 rounded-md overflow-hidden
              focus:outline-none px-7"
                placeholder="Email"
                required
              />
            </div>
            {/* phone num Register */}
            <div
              className="flex items-center justify-center bg-white rounded-md overflow-hidden
            p-4 my-3"
            >
              <MdPhone className="text-2xl text-gray-600" />
              <input
                type="text"
                className="flex-1 rounded-md overflow-hidden
              focus:outline-none px-7"
                placeholder="Number"
                required
              />
            </div>
            {/* input num two (Password) */}
            <div
              className="flex items-center justify-center bg-white rounded-md overflow-hidden
            p-4 my-3"
            >
              <MdPassword className="text-2xl text-gray-600" />
              <input
                type={showPass ? "text" : "password"}
                className="flex-1 rounded-md overflow-hidden
              focus:outline-none px-7"
                placeholder="Password"
                required
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="text-3xl cursor-pointer"
              >
                {showPass ? <ImEye /> : <RiEyeCloseFill />}
              </div>
            </div>
            {/* confirm input (Password) */}
            <div
              className="flex items-center justify-center bg-white rounded-md overflow-hidden
            p-4 my-3"
            >
              <MdPassword className="text-2xl text-gray-600" />
              <input
                type={showPass ? "text" : "password"}
                className="flex-1 rounded-md overflow-hidden
              focus:outline-none px-7"
                placeholder="Confirm Password"
                required
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="text-3xl cursor-pointer"
              >
                {showPass ? <ImEye /> : <RiEyeCloseFill />}
              </div>
            </div>
            {/* button login */}
            <button
              className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>

            {/* Don’t Have an Account ?  forget PASS */}
            <div className="flex justify-center mt-5">
              <p>Have an Account ?</p>
              <p
                className="text-cyan-600 font-semibold
              hover:underline pl-2"
              >
                <Link href={"login"}>LogIn</Link>
              </p>
            </div>
          </form>
        </div>

        {/* logo(APP) half */}
        <div className="secend hidden md:flex bg-gradient-to-t from-[#CB6CE6] to-[#1462CA] w-2/4  flex-col items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            loading="lazy"
            src="/assets/auth/login.png"
            alt=""
            className="w-3/5 pb-5"
          />
          <div className="flex list-none w-full justify-evenly text-white text-3xl">
            <li className="">
              <a href="#"></a>
              <FaFacebook />
            </li>
            <li>
              <a href="#"></a>
              <FaInstagram />
            </li>
            <li>
              <a href="#"></a>
              <FaLinkedin />
            </li>
            <li>
              <a href="#"></a>
              <FaTelegram />
            </li>
            <li>
              <a href="#"></a>
              <FaTiktok />
            </li>
          </div>
        </div>
      </div>
    </main>
  );
}
