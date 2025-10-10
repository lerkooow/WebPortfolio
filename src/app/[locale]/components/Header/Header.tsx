"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import s from "./Header.module.scss";

export const Header = () => {
  const router = useRouter();
  const locale = useLocale();

  const t = useTranslations("Header");

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ru" : "en";
    router.replace(`/${newLocale}`);
  };

  const nav = [
    { label: `${t("about")}`, href: "#about" },
    { label: `${t("portfolio")}`, href: "#projects" },
    { label: `${t("contacts")}`, href: "#contacts" },
  ];

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <nav className={s.header__nav}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={s.header__link}>
              {item.label}
            </a>
          ))}
        </nav>

        <button onClick={toggleLanguage} className={s.header__lang}>
          {locale === "en" ? "ENG" : "РУС"}
        </button>
      </div>
    </header>
  );
};
