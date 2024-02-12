"use clinet";
import Image from "next/image";
import mockpPhone from "../../../../assets/auth/login.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import { Link } from "../../../../util/navigation";

export default function Login() {
  return (
    // Login page (Apple - google)
    // First section (BG) for make a hero section
    // we made this with tailwind
    <div className="w-full bg-[url(./assets/auth/BG.png)] bg-cover bg-white h-screen flex items-center justify-center">
      {/* hero section half login and socend half logo */}
      <div className="hero container m-auto w-4/5 h-4/5 flex rounded-2xl  overflow-hidden">
        {/* login half (Apple - google) */}
        <div className="first bg-zinc-300 w-2/4">
          <h1 className="text-center text-3xl font-bold mt-6">
            Login To Your Account
          </h1>
          <h2 className="text-center font-semibold mt-5">
            Wellcome Back! Select To Log In
          </h2>
          <div className="flex justify-evenly mt-5">
            <h1>google</h1>
            <h1>Apple</h1>
          </div>
          <p className="text-center mt-10">Or Continue With Email</p>

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
                type="password"
                className="flex-1 rounded-md overflow-hidden
              focus:outline-none px-7"
                placeholder="Password"
                required
              />
            </div>
            {/* cheack box */}
            <div className="flex justify-between">
              {/* cheack box and  Remember ME*/}
              <div className="flex">
                <input type="checkbox" className="w-4 h-4 mr-5 mt-1" />
                <p>Remember ME ?</p>
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
            <div className="flex justify-between mt-5">
              <p>Don’t Have an Account ?</p>
              <p
                className="text-cyan-600 font-semibold
              hover:underline pl-2"
              >
              <Link href={'register'}>Create An account</Link>
              </p>
            </div>
          </form>
        </div>

        {/* logo(APP) half */}
        <div className="secend bg-gradient-to-t from-[#CB6CE6] to-[#1462CA] w-2/4 flex flex-col items-center justify-center">
          <Image src={mockpPhone} alt="" className="w-3/5 pb-5" />
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
    </div>
  );
}
