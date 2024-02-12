"use client";
import React from 'react'
import { MdEmail, MdPassword, MdPhone, MdVerifiedUser } from 'react-icons/md';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from 'react-icons/fa';
import { Link } from '../../../../util/navigation';

export default function Register() {
  return (


    // Forget Password Page

    <div className="w-full bg-[url(./assets/auth/BG.png)] bg-cover bg-white h-screen flex items-center justify-center">
    
        {/* Enter your Email For Create a new Password */}
        <div className="bg-gradient-to-t from-[#CB6CE6] to-[#1462CA] m-auto w-1/2 h-3/5 rounded-2xl
        flex flex-col justify-center items-center">
            
            <p className='text-white'>Enter your email</p>

            <div className="flex items-center justify-center bg-white rounded-md overflow-hidden
                py-2 pr-16 my-5">
                <MdEmail className="text-2xl text-gray-600 mx-10"/>
                <input
                type="email"
                className="focus:outline-none"
                placeholder="Email"
                required
                />
            </div>

            <button
                className="mt-3 w-3/5 bg-blue-700 hover:bg-blue-900  text-white 
                font-bold py-2 px-4 rounded-md">
                Send
            </button>
            
            <p className='text-white my-5'>Cheack your email for create a new password</p>
        </div>

    </div>

)
}

// bg-gradient-to-t from-[#CB6CE6] to-[#1462CA] 