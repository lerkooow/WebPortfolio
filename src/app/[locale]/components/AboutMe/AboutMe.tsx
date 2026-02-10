import { useTranslations } from "use-intl";

import { ReturnComponent } from "../ReturnComponent";

import s from "./AboutMe.module.scss";

interface IAbout {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const AboutMe = () => {
  const t = useTranslations("AboutMe");
  const e = useTranslations();

  const about = e.raw("Experience");

  return (
    <div className={s.aboutMe}>
      <div className={s.aboutMe__container}>
        <ReturnComponent title={`${t("title")}`} href="/" />
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
            {about.map((item: IAbout, index: number) => (
              <div className={s.aboutMe__description} key={index}>
                <div className={s.aboutMe__experience}>
                  <p className={s.aboutMe__experience_name}>{item.company}</p> - <p>{item.position}</p>
                </div>
                <p className={s.aboutMe__experience_period}>{item.period}</p>
                <p className={s.aboutMe__experience_description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
