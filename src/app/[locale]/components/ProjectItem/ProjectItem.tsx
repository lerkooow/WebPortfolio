import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

import { useTranslations } from "use-intl";

import { ProjectCard } from "../ProjectCard";
import { ReturnComponent } from "../ReturnComponent";
import type { IProject } from "../../projects/utils";

import s from "./ProjectItem.module.scss";

export const ProjectItem = () => {
  const params = useParams();
  const t = useTranslations();
  const projectItem = useTranslations("ProjectItem");

  const projects = t.raw("Projects") as IProject[];
  const project = projects.find((p: IProject) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={s.projectItem}>
      <div className={s.projectItem__container}>
        <ReturnComponent href="/projects" />

        <div className={s.projectItem__header}>
          <div className={s.hero}>
            <div className={s.hero__content}>
              <div className={s.hero__period}>{project.period}</div>
              <h1 className={s.hero__title}>{project.title}</h1>
            </div>
            <div className={s.hero__imageWrapper}>
              <img src={`/images/${project.img}`} alt={project.title} className={s.imageWrapper__image} />
            </div>
          </div>
        </div>

        <div className={s.content}>
          <div className={s.content__main}>
            <ProjectCard icon="/hashtag.svg" title={projectItem("aboutProject")}>
              <p>{project.description}</p>
            </ProjectCard>

            {project.stack?.length > 0 && (
              <ProjectCard icon="/computer.svg" title={projectItem("techStack")}>
                <div className={s.techStack}>
                  {project.stack.map((tech, index) => (
                    <span key={index} className={s.techStack__item}>
                      {tech}
                    </span>
                  ))}
                </div>
              </ProjectCard>
            )}
          </div>

          <div className={s.content__sidebar}>
            {(project.linkGit || project.linkDeploy) && (
              <ProjectCard icon="/links.svg" title={projectItem("links")} compact>
                <div className={s.links}>
                  {project.linkDeploy && (
                    <Link href={project.linkDeploy} target="_blank" rel="noopener noreferrer" className={`${s.links__button} ${s.links__button_primary}`}>
                      <Image src="/arrow-up.svg" alt="arrow icon" width={24} height={24} />
                      <span>{projectItem("liveDemo")}</span>
                    </Link>
                  )}
                  {project.linkGit && (
                    <Link href={project.linkGit} target="_blank" rel="noopener noreferrer" className={s.links__button}>
                      <Image src="/github.svg" alt="github icon" width={24} height={24} />
                      <span>GitHub</span>
                    </Link>
                  )}
                </div>
              </ProjectCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
