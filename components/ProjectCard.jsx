import Image from "next/image";
import Link from "next/link";

import crystopia from "../public/images/crystopia.png";
import disbot from "../public/images/dsbot-full-q.png";
import nexocrew from "../public/images/newxocerw-1024.png";


const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: crystopia,
      title: "Crystopia",
      description: "Unique Minecraft server with custom features and plugins 🚀",
      link: "https://www.crystopia.net/",
      target: "_self",
    },
    {
      id: 2,
      image: disbot,
      title: "Disbot",
      description: "A Discord Bot to make customisation easy",
      link: "https://disbot.xyz/",
      target: "_self",
    },
    {
      id: 3,
      image: nexocrew,
      title: "NexoCrew",
      description: "A community of developers to make Solutions for everyone.",
      link: "https://nexocrew.com/",
      target: "_self",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-full drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
