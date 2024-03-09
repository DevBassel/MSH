"use client";
import Image from "next/image";
import { Link } from "@app/util/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import { ImEye } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  const googlelogin = useGoogleLogin({
    // will send to backend
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
    },
    flow: "implicit",
  });

  return (
    // Login page (Apple - google)
    // First section (BG) for make a hero section
    // we made this with tailwind
    <main className="bg-[url(/assets/auth/BG.png)] font-cairo flex items-center h-screen bg-cover">
      <div className="container m-auto w-4/5 flex rounded-2xl overflow-hidden">
        {/* login half (Apple - google) */}
        <div className="first flex flex-1 flex-col py-5  items-center bg-zinc-300 w-2/4">
          <h1 className="text-center text-3xl font-bold ">Login</h1>

          <h2 className="text-center font-semibold mt-5">
            welcome Back! Select To Log In
          </h2>

          <div className="flex justify-evenly mt-5 w-full [&>button]:px-10">
            <button
              onClick={() => googlelogin()}
              className="px-4 py-2 border flex gap-2 bg-white hover:border-slate-400 border-slate-200 rounded-lg hover:shadow transition duration-150"
            >
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                loading="lazy"
                className="w-6 h-6"
                src="/assets/auth/google.svg"
                alt="google logo"
              />
              <span> Google</span>
            </button>
            <button className="px-4 py-2 border flex gap-2 bg-white hover:border-slate-400 border-slate-200 rounded-lg hover:shadow transition duration-150">
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                loading="lazy"
                className="w-6 h-6"
                src="/assets/auth/apple.svg"
                alt="apple logo"
              />
              <span> Apple</span>
            </button>
          </div>
          <p className="text-center text-sm mt-3">Or Continue With Email</p>

          <form className="w-4/5 m-auto">
            {/* input num one (user) */}
            <div
              className="flex items-center justify-center bg-white rounded-md overflow-hidden
            p-4 my-3"
            >
              <MdEmail className="text-2xl text-gray-600" />
              <input
                type="email"
                className="flex-1 rounded-md overflow-hidden
              focus:outline-none px-7"
                placeholder="User"
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

            {/* cheack box */}
            <div className="flex justify-between  items-center text-sm">
              {/* cheack box and  Remember ME*/}
              <div className="flex ">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 mr-5 mt-1"
                />
                <label htmlFor="remember" className="cursor-pointer">
                  Remember ME ?
                </label>
              </div>
              {/* Forgot Password ? */}
              <div className="felx text-cyan-600 font-semibold hover:underline">
                <Link href={"forgetpassword"}>Forgot Password ?</Link>
              </div>
            </div>

            {/* button login */}
            <button
              className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded"
            >
              Login
            </button>

            {/* Don’t Have an Account ?  forget PASS */}
            <div className="flex justify-between mt-5 text-sm">
              <p>Don’t Have an Account ?</p>
              <p
                className="text-cyan-600 font-semibold
              hover:underline pl-2"
              >
                <Link href={"register"}>Create An account</Link>
              </p>
            </div>
          </form>
        </div>

        {/* logo(APP) half */}
        <div className="secend hidden lg:flex bg-gradient-to-t from-[#CB6CE6] to-[#1462CA] w-2/4 flex-col items-center justify-center">
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
