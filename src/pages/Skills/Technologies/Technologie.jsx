import { technologies } from "../../../technologies";

export default function Technologie() {
  return (
    <div className="grid grid-cols-1 md:w-full gap-8 p-4 md:grid-cols-2 md:gap-8 w-[90%] m-auto">
      {technologies.map((technology, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bed-about w-full text-white border border-white rounded-lg p-4 scale-100 hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >

            <div className="flex felx-row w-full gap-4 m-2 p-3">
          <img
            className="w-12  h-auto "
            src={technology.image}
            alt={technology.name}
          />
          <h3 className="text-2xl font-semibold mb-2">{technology.name}</h3>
          </div>

          <p className="text-justify m-2">{technology.description}</p>
          <div className="w-full">
          <button className="flex items-start justify-start px-4 py-2 buttons-color rounded-md m-5 ">
            Read More
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}
