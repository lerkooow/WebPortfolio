import { getTranslations } from "next-intl/server";

export interface IProject {
  title: string;
  slug: string;
  period: string;
  description: string;
  stack: string[];
  linkGit: string;
  linkDeploy: string;
  img: string;
}

export async function getProjects(locale: string): Promise<IProject[]> {
  const t = await getTranslations({ locale });
  return t.raw("Projects") as IProject[];
}

export async function getProjectBySlug(locale: string, slug: string): Promise<IProject | undefined> {
  const projects = await getProjects(locale);
  return projects.find((project) => project.slug === slug);
}
