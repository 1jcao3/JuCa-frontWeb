import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from "/src/assets/logo/foto cv.jpg";
import { Link } from "react-router-dom";

export default function ProfileSection() {
  return (
    <section className="md:w-[30%]  w-full h-full m-auto mt-6 flex flex-col p-2 items-center">
      <figure className=" w-72 h-72 flex flex-col items-start justify-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img
          className="rounded-full object-cover w-full h-full "
          src={logo}
          alt="profile"
        />

        <figcaption className="p-4 pb-0 text-lg font-bold">
          Julian Camilo Ayala Ochoa
        </figcaption>
      </figure>
      <span className=" justify-start text-start pt-3 px-4 icons">1jcao3</span>

      <hr className=" my-3 flex icons border-solid border-1 w-64 " />

      <div className="flex flex-col w-72 px-4 gap-6 my-5 ">
        <Link target="_blank" rel="noopener noreferrer" to={"https://www.google.com/maps/place/Duitama,+Boyac%C3%A1/@5.8259915,-73.0301255,14z/data=!3m1!4b1!4m6!3m5!1s0x8e6a3f0ca12f6173:0x6a043a55d2f7de6e!8m2!3d5.8268951!4d-73.0329273!16zL20vMDR0aDlo?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"}>
          <span className=" text-lg  flex flex-row items-center justify-start gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <GiPositionMarker className=" icons text-2xl flex items-center justify-start" />{" "}
            Duitama-Boyacá
          </span>
        </Link>
        <Link target="_blank" rel="noopener noreferrer" to={"https://wa.me/3133746649"}>
        <span className=" text-lg  flex flex-row items-center justify-start gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <FaPhone className="flex icons items-center justify-start" /> +57
          3133746649
        </span>
        </Link>
        <span className=" text-lg  flex flex-row items-center justify-start gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <SiGmail className="flex icons items-center justify-start" />{" "}
          <a href="mailto:juliankamilo6@gmail.com">juliankamilo6@gmail.com</a>
        </span>
      </div>

      <hr className=" my-3 flex icons border-solid border-1 w-64 " />

      <div className="md:flex flex-col w-72 px-4 gap-2 hidden ">
        <button className=" w-full h-full py-2 bg-[#75737843] rounded transition-transform duration-300 hover:scale-105 hover:shadow-lg">
         <a href="/public/CV Julian Ayala.pdf" download={true}> {" "}

          Download Cv
          </a>
        </button>
      </div>
    </section>
  );
}
