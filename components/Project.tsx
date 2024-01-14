import React from "react";
import project1 from "../public/image/crisp-works.png";
import project2 from "../public/image/lifecycle-works.png";
import project3 from "../public/image/desktop-design.jpg";
import ProjectCard from "./ProjectCard";
import CardGlass from "./Card/CardGlass";

export default function Project() {
    const projects = [
        {
            gambar: project1,
            projectTitle: "Noteworthy technology",
            deskripsi: "Product design",
        },
        {
            gambar: project2,
            projectTitle: "Clonning Heylink me",
            deskripsi: "Fornt End developer",
        },
        {
            gambar: project3,
            projectTitle: "Alpo Picture",
            deskripsi: "Web Developer",
        },
        {
            gambar: project3,
            projectTitle: "Alpo Picture",
            deskripsi: "Web Developer",
        },
    ];

    return (
        <div className="h-full text-center flex flex-col md:text-left sm:max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center ">
            <h1 className="flex justify-center uppercase tracking-[20px] text-primary text-2xl mt-10 mb-10">
                Project
            </h1>

            <div className="flex justify-center ">
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    {projects.map((project, index) => (
                        <CardGlass
                            key={index}
                            images={project.gambar}
                            cardTitle={project.projectTitle}
                            description={project.deskripsi}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

{
    /* <div className="flex flex-wrap gap-3 items-center justify-center">
  {projects.map((project, index) => (
    <ProjectCard
      key={index}
      gambar={project.gambar}
      projectTitle={project.projectTitle}
      deskripsi={project.deskripsi}
    />
  ))}
</div> */
}
