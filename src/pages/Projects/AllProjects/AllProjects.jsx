import { useParams, useNavigate } from "react-router-dom";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { projects1 } from "../../../projects";
import { useEffect, useState } from "react";

export default function AllProjects() {
  const { id } = useParams(); // Captura el parámetro 'id' de la URL
  const navigate = useNavigate(); // Para navegar de regreso
  const projects = projects1;

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (id) {
      const project = projects.find((project) => project.id.toString() === id);
      setSelectedProject(project || null);
    }
  }, [id, projects]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    navigate(`/projects/${project.id}`); // Actualiza la URL con el ID del proyecto
  };

  const onBackProject = () => {
    setSelectedProject(null);
    navigate("/projects"); // Regresa a la lista de proyectos
  };

  return (
    <section className="md:w-auto w-full">
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBackProject={onBackProject}
        />
      ) : (
        <>
          <h2 className="mt-6 flex justify-start font-bold">All Projects</h2>
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4">
            {projects.map((project) => (
              <div
                className="border-solid border-2 bed-about mt-5 rounded hover:bg-black hover:shadow-xl hover:-translate-y-2"
                onClick={() => handleProjectClick(project)}
                key={project.id}
              >
                <div className="h-full flex flex-col">
                  <h2 className="font-bold p-3 text-lg text-justify">
                    {project.name}
                  </h2>
                  <div className="flex items-center justify-center w-40 h-40 p-5 m-auto">
                    <img
                      className="object-contain flex justify-center w-full h-full"
                      src={project.images[0]}
                      alt="project image"
                    />
                  </div>
                  <div className="text-justify md:mx-8 p-3 flex flex-col flex-grow">
                    <p className="icons">{project.description}</p>
                    <div className="flex items-end mt-auto">
                      <p className="flex flex-row items-center">
                        <VscDebugBreakpointData className="text-cyan-200" />
                        <span className="icons">{project.language}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
