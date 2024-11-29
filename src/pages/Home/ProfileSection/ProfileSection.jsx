
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from "/src/assets/logo/foto cv.jpg"

export default function ProfileSection() {
  return (
    <section className="md:w-[30%]  w-full h-full m-auto mt-6 flex flex-col p-2 items-center">
      
      <figure className=" w-72 h-72 flex flex-col items-start justify-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        
         
        <img  className="rounded-full object-cover w-full h-full " src={logo} alt="profile" />
      
      <figcaption className="p-4 pb-0 text-lg font-bold">Julian Camilo Ayala Ochoa</figcaption>

      
      </figure>
      <span className=" justify-start text-start pt-3 px-4 icons">1jcao3</span>

        <hr className=" my-3 flex icons border-solid border-1 w-64 " />

        <div className="flex flex-col w-72 px-4 gap-6 my-5 ">

        <span className=" text-lg  flex flex-row items-center justify-start gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"><GiPositionMarker className=" icons text-2xl flex items-center justify-start"/> Duitama-Boyacá</span>
        <span className=" text-lg  flex flex-row items-center justify-start gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"><FaPhone className="flex icons items-center justify-start"/> +57 3133746649</span>
        <span className=" text-lg  flex flex-row items-center justify-start gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"><SiGmail className="flex icons items-center justify-start"/>  <a href="mailto:juliankamilo6@gmail.com">juliankamilo6@gmail.com</a></span>


        </div>

        <hr className=" my-3 flex icons border-solid border-1 w-64 " />

        <div className="md:flex flex-col w-72 px-4 gap-2 hidden ">

  <button className=" w-full h-full py-2 bg-[#75737843] rounded transition-transform duration-300 hover:scale-105 hover:shadow-lg"> Download Cv</button>
          
        </div>
    </section>
  )
}
