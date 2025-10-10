import { useTranslations } from "next-intl";

import ShinyText from "@/components/ShinyText/ShinyText";

import s from "./Main.module.scss";

export const Main = () => {
  const t = useTranslations("Main");

  return (
    <div className={s.main}>
      <div className={s.main__container}>
        <p className={s.main__role}>{t("role")}</p>
        <h1 className={s.main__greeting}>{t("title")}</h1>
        <button className={s.main__button}>
          <ShinyText text={`${t("more")}`} speed={3} />
        </button>
      </div>
    </div>
  );
};
