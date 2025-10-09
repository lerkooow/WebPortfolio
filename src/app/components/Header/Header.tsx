import s from "./Header.module.scss";

const nav = [
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export const Header = () => {
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
        <button className={s.header__lang}>ENG/RU</button>
      </div>
    </header>
  );
};
