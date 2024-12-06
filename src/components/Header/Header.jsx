/* eslint-disable react/prop-types */
import logo from "/src/assets/logo/foto cv.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GoProjectSymlink } from "react-icons/go";
import { SiHyperskill } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export default function Header({ onMenuToggle }) {
  return (
    <>
      <header className="flex flex-col w-full h-32 bg-[#09090a]">
        <div className="flex p-6 flex-row w-full px-6 justify-between h-20">
          <div className="flex flex-row gap-6 items-center justify-center">
            <div
              className="w-auto h-auto rounded border-2 border-solid border-[#3f3f40] p-2 cursor-pointer"
              onClick={onMenuToggle}
            >
              <GiHamburgerMenu className="icons" />
            </div>

            <div className="w-10 h-10">
              <img
                className="rounded-full w-full h-full object-cover"
                src={logo}
                alt="logo"
              />
            </div>
            <h1 className="text-2xl">JuCa</h1>
          </div>
          <div className="flex felx-row items-center gap-2">
            
            <Link target="_blank" rel="noopener noreferrer" to={"https://www.facebook.com/1jcao3"}><FaFacebook className="text-2xl text-[#ffffff]" /></Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://www.instagram.com/1jcao3/"}><IoLogoInstagram className="text-3xl text-[#ffffff]" /></Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://wa.me/3133746649"}><IoLogoWhatsapp className="text-3xl text-[#ffffff]" /></Link>
          </div>
        </div>
        <nav className="h-12 flex p-3 px-6 flex-row justify-between items-center overflow-x-auto">
          <ul className="flex flex-row gap-2">
            <li className="flex flex-row items-center justify-between gap-2">
              <CgProfile className="icons" />
              <Link to="/">Profile</Link>
              <span className="text-[#3f3f40]">|</span>
            </li>

            <li className="flex flex-row items-center justify-between gap-2">
              <GoProjectSymlink className="icons" />
              <Link to="/projects">Projects</Link>
              <span className="text-[#3f3f40]">|</span>
            </li>
            <li className="flex flex-row items-center justify-between gap-2">
              <SiHyperskill className="icons" />
              <Link to="/skills">Skills</Link>
              <span className="text-[#3f3f40]">|</span>
            </li>
            <li className="flex flex-row items-center justify-between gap-2">
              <IoSettingsOutline className="icons" />
              <Link to="/settings">Settings</Link>
             
            </li>

          </ul>

          <div className="hidden md:block">
            <a href="mailto:juliankamilo6@gmail.com">juliankamilo6@gmail.com</a>
          </div>
        </nav>
      </header>
    </>
  );
}
