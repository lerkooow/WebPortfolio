"use client";

import { useEffect, useState } from "react";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

import { useTranslations } from "use-intl";

export const useHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useTranslations("Header");

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ru" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  const nav = [
    { label: `${t("home")}`, href: "/" },
    { label: `${t("about")}`, href: "/about" },
    { label: `${t("projects")}`, href: "/projects" },
    { label: `${t("contacts")}`, href: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolled, nav, locale, toggleLanguage };
};
