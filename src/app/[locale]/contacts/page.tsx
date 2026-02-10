"use client";

import { useTranslations } from "use-intl";

import { Header } from "../components/Header";
import { Contacts } from "../components/Contacts/Contacts";

import Silk from "@/components/Silk/Silk";

export default function ContactsPage() {
  const t = useTranslations("Contacts");

  return (
    <div className="relative w-full min-h-screen text-white">
      <div className="fixed inset-0 -z-10">
        <Silk color="#545454" speed={2.5} scale={0.8} noiseIntensity={0} />
      </div>

      <Header />

      <main className="flex items-center justify-center min-h-[calc(100vh-85px)] px-6">
        <Contacts />
      </main>
    </div>
  );
}
