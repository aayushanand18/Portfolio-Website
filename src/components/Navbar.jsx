import logo from "../assets/logo.jpg";
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aayush-anand-bitmesra" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aayushanand18/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/aayush_anand18/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://leetcode.com/u/aayush_anand18/" target="_blank">
          <SiLeetcode />
        </a>
    </div>
  </nav>
}

export default Navbar