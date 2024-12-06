
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-2  text-white ">
      <div className="container mx-auto md:px-16 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold">JuCa</h1>
            <p className="mt-2">Improving knowledge through innovative solutions.</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/" className="hover:text-gray-400">About</a></li>
              <li><a href="/skills" className="hover:text-gray-400">Skills</a></li>
              <li><a href="/settings" className="hover:text-gray-400">Settings</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex space-x-4 items-center justify-center mb-4 md:mb-0">
          <Link target="_blank" rel="noopener noreferrer" to={"https://www.facebook.com/1jcao3"}><FaFacebook className="text-2xl text-[#ffffff]" /></Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://www.instagram.com/1jcao3/"}><IoLogoInstagram className="text-3xl text-[#ffffff]" /></Link>
            <Link target="_blank" rel="noopener noreferrer" to={"https://wa.me/3133746649"}><IoLogoWhatsapp className="text-3xl text-[#ffffff]" /></Link>
          </div>
          <div className="text-center md:text-right">
            <span className="block mb-2 md:mb-0"><a href="mailto:juliankamilo6@gmail.com" className="hover:text-gray-400">juliankamilo6@gmail.com</a></span>
            <p className="text-gray-400">&copy; 2024 JuCa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
