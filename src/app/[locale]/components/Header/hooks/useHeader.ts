"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { useTranslations } from "use-intl";

export const useHeader = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useTranslations("Header");

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ru" : "en";
    router.replace(`/${newLocale}`);
  };

  const nav = [
    { label: `${t("about")}`, href: "/about" },
    { label: `${t("portfolio")}`, href: "/projects" },
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
