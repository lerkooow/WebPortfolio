"use client";

import Image from "next/image";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Silk from "../components/Silk/Silk";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <Silk color="#545454" speed={2.5} scale={0.8} noiseIntensity={0} />

      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Main />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-pulse pointer-events-none">
        <Image src="/arrow.svg" width={24} height={24} alt="arrow" />
      </div>
    </div>
  );
}
