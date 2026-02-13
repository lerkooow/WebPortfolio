import Image from "next/image";
import { useState, useMemo } from "react";

import { useTranslations } from "use-intl";
import { Link } from "@/i18n/navigation";

import { IProject } from "../../projects/utils";

import s from "./Projects.module.scss";

export const Projects = () => {
  const t = useTranslations();
  const projects = t.raw("Projects");
  const title = useTranslations("ProjectItem");
  const option = useTranslations("StackOptions");

  // const stackOptions = [`${option("all")}`, "Next.js", "React", "HTML"];
  const stackOptions = [
    { value: "all", label: option("all") },
    { value: "next", label: "Next.js" },
    { value: "react", label: "React" },
    { value: "html", label: "HTML" },
  ];

  const [selectedProject, setSelectedProject] = useState("");
  const [selectedStack, setSelectedStack] = useState("all");

  const filteredProjects = useMemo(() => {
    if (selectedStack === "all") return projects;

    return projects.filter((p: IProject) => p.stack.some((tech) => tech.toLowerCase().includes(selectedStack.toLowerCase())));
  }, [projects, selectedStack]);

  const projectsItem = projects.find((item: IProject) => selectedProject === item.title);

  return (
    <div className={s.projects}>
      <div className={s.projects__image}>{projectsItem && <Image key={projectsItem.img} src={`/images/${projectsItem.img}`} alt={projectsItem.title} fill className={s.projects__preview} />}</div>

      <div className={s.projects__info}>
        <div className={s.projects__header}>
          <h2>{`${title("title")}`}</h2>
          <p>{filteredProjects.length}</p>
        </div>

        <div className={s.projects__filter}>
          {stackOptions.map((option) => (
            <button key={option.value} className={`${s.projects__filterBtn} ${selectedStack === option.value ? s.projects__filterBtn_active : ""}`} onClick={() => setSelectedStack(option.value)}>
              {option.label}
            </button>
          ))}
        </div>

        <div className={s.projects__list}>
          {filteredProjects.map((project: IProject, index: number) => (
            <Link
              onMouseEnter={() => setSelectedProject(project.title)}
              onMouseLeave={() => setSelectedProject("")}
              className={`${s.projects__item} ${selectedProject === project.title ? s.projects__item_active : ""}`}
              key={index}
              href={`/projects/${project.slug}`}
            >
              <div className={s.projects__itemHeader}>
                <span className={s.projects__arrow}>{selectedProject === project.title && <Image src="/arrow.svg" alt="arrow right" width={24} height={24} />}</span>
                <p>{project.title}</p>
              </div>
              <p className={s.projects__itemStack}>{project.stack[0]}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
