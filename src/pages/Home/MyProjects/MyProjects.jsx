
import { Link } from "react-router-dom";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { projects1 } from "../../../projects";



export default function Projects() {
 const projects=projects1;



  return (
    <section>
      <h2 className="mt-6 flex justify-start font-bold">Main projects</h2>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <div
              className="border-solid border-2 bed-about mt-5 h-full p-0 rounded hover:bg-black transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              key={project.id}
            >
              <div className="h-full flex flex-col">
                <h2 className="font-bold p-3 text-lg text-justify ">
                  {project.name}
                </h2>

                <div className="text-justify md:mx-8 p-3 flex flex-col flex-grow">
                  <p className="icons">{project.description}</p>
                  <div className="flex items-end mt-auto">
                    <p className="flex flex-row items-center">
                      <VscDebugBreakpointData className="text-cyan-200"></VscDebugBreakpointData>
                      <span className="icons">{project.languaje}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
