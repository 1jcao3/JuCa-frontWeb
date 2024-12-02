/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";

export default function SideBar({ isOpen, onMenuToggle, sidebarRef }) {
  return (
    <>
      <div
        ref={sidebarRef}
        className={`${
          isOpen
            ? "fixed opacity-1 flex z-10  flex-col rounded-r-xl transition-all w-[325px] h-full bg-black  items-start justify-start p-5"
            : "hidden"
        }`}
      >
        <div className="flex flex-row justify-between w-full px-5">
          <div className="w-10 h-10">
            <img
              className="rounded-full w-full h-full object-cover"
              src="/src/assets/logo/foto cv.jpg"
              alt="logo"
            />
          </div>

          <MdCancel
            className="text-2xl hover:text-[grey] cursor-pointer"
            onClick={onMenuToggle}
          >
            
          </MdCancel>
        </div>
        <nav className="flex flex-col w-full h-auo my-4 text-justify gap-4 items-center justify-start">
          <ul className="flex flex-col w-full gap-4 items-center justify-start">
          <Link to="/" className="w-full" onClick={onMenuToggle}>
            <li className="flex w-full justify-start items-center gap-2 hover:bg-[#75737843] rounded p-2 cursor-pointer ">
            <IoHomeSharp className="icons"></IoHomeSharp>Home
            </li>
            </Link>
            <Link className="w-full" to="/projects" onClick={onMenuToggle}>
            <li className="flex w-full justify-start items-center gap-2 hover:bg-[#75737843] rounded p-2 cursor-pointer ">
             <GoProjectSymlink className="icons"></GoProjectSymlink> Projects
            </li>
            </Link>
            <Link to="/skills" className="w-full" onClick={onMenuToggle}>
            <li className="flex w-full justify-start items-center gap-2 hover:bg-[#75737843] rounded p-2 cursor-pointer">
            <SiHyperskill className="icons"></SiHyperskill>
              Skills
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
