import { FaAddressBook } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function Career() {
  const dataStudy = [
    {
      id: 1,
      title: "Academic High School Degree",
      company: "Colegio Salesiano de Duitama",
      description:
        "Graduated with excellent grades, recognized for commitment, discipline, and the ability to learn quickly.",
      date: "2019",
    },
    {
      id: 2,
      title: "Técnico Laboral",
      company: "Ministerio de las tecnologías de la información",
      description:
        "Completed a course with Colombia's Ministry of ICT focused on programming with a web specialization.",
      date: "2020",
    },
    {
      id: 3,
      title: "Software Engineering",
      company: "Univerisidad pedagógica y tecnológica de Colombia",
      description: `Engineering student recognized for developing skills and a strong foundation in concepts of 
      object-oriented programming, both theoretical and practical.`,
      date: "2020-2022",
    },
    {
      id: 4,
      title: "Software Engineering",
      company: "Univerisidad nacional abierta y  distancia de Colombia",
      description:
        "Engineering student recognized for high performance and the consolidation of a strong foundation.",
      date: "Present",
    },
    
  ];
  const dataJobs = [
    {
      id: 1,
      title: "Python Tutor",
      company: "Kodland",
      description:
        "Tutor for children on a web platform, teaching classes and guiding practical exercises.",
      date: "2024",
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "Sternenzel EIRL",
      description: `Worked as a front-end developer for creating and maintaining websites.
        Collaborated in a team using tools like Figma, React, Git, GitHub, and Jira.`,
      date: "2024",
    },
    
  ];
  return (
    <>
      <div>
        <h2 className="mt-8 flex  justify-start font-bold">Career</h2>

        {dataStudy.map((data) => (
          <div
            className="md:h-40 h-72 flex flex-row items-start justify-start mt-6 md:mb-10 mb-16 hover:shadow-lg hover:bg-[#4e377022] transition-all duration-300 hover:-translate-y-2"
            key={data.id}
          >
            <div className="  h-[99%] mx-1  mt-[0.5px]  border-solid border-[1px] border-[#a3a3a3] w-[1px]  flex"></div>
            <div className=" flex flex-col items-start justify-start">
              <div className="flex flex-row justify-start items-start gap-2 mb-3">
                <FaAddressBook className="icons flex ml-[-6px]"></FaAddressBook>
                <h2 className="flex flex-row items-start justify-start text-justify   font-bold">
                  {data.title}
                </h2>
              </div>

              <div className="flex flex-col px-4">
                <p className="icons text-justify">{data.company}</p>
                <p className="icons text-justify">{data.description}</p>
                <p className="icons">{data.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="mt-8 flex  justify-start font-bold">Jobs</h2>

        {dataJobs.map((data) => (
          <div
            className="md:h-40 h-72 flex flex-row items-start justify-start mt-6 md:mb-10 mb-16 hover:shadow-lg hover:bg-[#4e377022] transition-all duration-300 hover:-translate-y-2"
            key={data.id}
          >
            <div className="  h-[98%] mx-1  mt-[5px]  border-solid border-[1px] border-[#a3a3a3] w-[1px]  flex"></div>
            <div className=" flex flex-col items-start justify-start">
              <div className="flex flex-row justify-start items-start gap-2 mb-3">
                <MdWork className="icons flex ml-[-6px]"></MdWork>
                <h2 className="flex flex-row items-start justify-start text-justify   font-bold">
                  {data.title}
                </h2>
                </div>
                <div className="flex flex-col px-4">
                  <p className="icons text-justify">{data.company}</p>
                  <p className="icons text-justify">{data.description}</p>
                  <p className="icons">{data.date}</p>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
