import { useState } from "react";
import { useTranslations } from "use-intl";
import s from "./Projects.module.scss";

interface IProject {
  title: string;
  period: string;
  description: string;
  stack: string[];
  linkGit: string;
  linkDeploy: string;
  img: string;
}

export const Projects = () => {
  const t = useTranslations();
  const projects = t.raw("Projects");
  const [selectedProject, setSelectedProject] = useState("");
  const projectsItem = projects.find((item: IProject) => selectedProject === item.title);

  return (
    <div className={s.projects}>
      <div className={s.projects__image}>{projectsItem && <img key={projectsItem.img} src={`/images/${projectsItem.img}`} alt={projectsItem.title} className={s.projects__preview} />}</div>

      <div className={s.projects__info}>
        <div className={s.projects__header}>
          <h2>Projects</h2>
          <p>{projects.length}</p>
        </div>
        <ul>
          {projects.map((project: IProject, index: number) => (
            <li
              onMouseEnter={() => setSelectedProject(project.title)}
              onMouseLeave={() => setSelectedProject("")}
              className={`${s.projects__item} ${selectedProject === project.title ? s.projects__item_active : ""}`}
              key={index}
            >
              <span className={s.projects__arrow}>{selectedProject === project.title && <img src="/arrow.svg" alt="arrow right" />}</span>
              <a href="#">{project.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
