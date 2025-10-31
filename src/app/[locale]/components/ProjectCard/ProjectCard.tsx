import Image from "next/image";
import { ReactNode } from "react";
import s from "./ProjectCard.module.scss";

interface ProjectCardProps {
  icon: string;
  title: string;
  children: ReactNode;
  compact?: boolean;
}

export const ProjectCard = ({ icon, title, children, compact = false }: ProjectCardProps) => {
  return (
    <div className={`${s.projectCard} ${compact ? s.projectCard_compact : ""}`}>
      <div className={s.projectCard__header}>
        <div className={s.projectCard__icon}>
          <Image src={icon} alt={`${title} icon`} width={24} height={24} />
        </div>
        <h2 className={s.projectCard__title}>{title}</h2>
      </div>
      <div className={s.projectCard__content}>{children}</div>
    </div>
  );
};
