"use client";

import { useParams, notFound } from "next/navigation";

import { useTranslations } from "use-intl";

import { Header } from "../../components/Header";
import { ProjectItem } from "../../components/ProjectItem";

import Silk from "@/components/Silk/Silk";

import { IProject } from "../utils";

export default function ProjectPage() {
  const params = useParams();
  const t = useTranslations();
  const projects = t.raw("Projects") as IProject[];

  const project = projects.find((p: IProject) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Silk color="#545454" speed={2.5} scale={0.8} noiseIntensity={0} />
      </div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProjectItem />
      </main>
    </div>
  );
}
