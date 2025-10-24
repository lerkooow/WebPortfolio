import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "use-intl";

import s from "./AboutMe.module.scss";

export const AboutMe = () => {
  const t = useTranslations("AboutMe");

  return (
    <div className={s.aboutMe}>
      <div className={s.aboutMe__container}>
        <div className={s.aboutMe__title}>
          <Link href="/">
            <Image src="/arrow.svg" alt="arrow back main page" width={24} height={24} className="rotate-90 animate-pulse cursor-pointer" />
          </Link>
          <h1>{t("title")}</h1>
          <div></div>
        </div>
        <div className={s.aboutMe__content}>
          <p className={s.aboutMe__subtitle}>{t("introduction")}</p>
          <div className={s.aboutMe__information}>
            <div className={s.aboutMe__description}>
              <p className={s.aboutMe__description_text}>{t("introduction-description")}</p>
            </div>
          </div>
          <p className={s.aboutMe__subtitle}>{t("skills")}</p>
          <div className={s.aboutMe__information}>
            <div className={s.aboutMe__description}>
              <p>{t("skills-description")}</p>
            </div>
          </div>
          <p className={s.aboutMe__subtitle}>{t("experience")}</p>
          <div className={s.aboutMe__information}>
            <div className={s.aboutMe__description}>
              <p className={s.aboutMe__experience}>{t("experience-one")}</p>
              <p className={s.aboutMe__experience_period}>{t("experience-one-period")}</p>
              <p className={s.aboutMe__experience_description}>{t("experience-one-description")}</p>
            </div>
            <div className={s.aboutMe__description}>
              <p className={s.aboutMe__experience}>{t("experience-two")}</p>
              <p className={s.aboutMe__experience_period}>{t("experience-two-period")}</p>
              <p className={s.aboutMe__experience_description}>{t("experience-two-description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
