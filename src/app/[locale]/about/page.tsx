"use client";

import { Header } from "../components/Header";
import { AboutMe } from "../components/AboutMe";
import Silk from "@/components/Silk/Silk";

export default function AboutPage() {
  return (
    <div className="relative w-full">
      <div className="fixed inset-0 -z-10">
        <Silk color="#545454" speed={2.5} scale={0.8} noiseIntensity={0} />
      </div>
      <Header />
      <main className="flex flex-col items-center min-h-[calc(100vh-85px)]">
        <AboutMe />
      </main>
    </div>
  );
}
