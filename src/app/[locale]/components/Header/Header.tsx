"use client";

import { useHeader } from "./hooks/useHeader";

import s from "./Header.module.scss";

export const Header = () => {
  const { isScrolled, nav, locale, toggleLanguage } = useHeader();

  return (
    <header className={`${s.header} ${isScrolled ? s.headerScrolled : ""}`}>
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
