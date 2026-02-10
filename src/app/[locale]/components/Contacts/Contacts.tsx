import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "use-intl";

import s from "./Contacts.module.scss";

export const Contacts = () => {
  const t = useTranslations("Contacts");

  return (
    <div className={s.wrapper}>
      <Link href="/">
        <Image src="/arrow.svg" alt="arrow back main page" width={24} height={24} className="rotate-90 animate-pulse cursor-pointer" />
      </Link>
      <h1 className={s.title}>{t("title")}</h1>

      <div className={s.timelineWrapper}>
        <div className={s.timelineLine} />

        <div className={s.items}>
          <div className={s.item}>
            <div className={s.left}>
              <span className={s.label}>{t("email")}</span>
              <a href="mailto:valeriia.akh@gmail.com" className={s.link} aria-label="Send email to Valeriia">
                valeriia.akh@gmail.com
              </a>
            </div>
            <div />
          </div>

          <div className={s.item}>
            <div />
            <div className={s.right}>
              <span className={s.label}>{t("telegram")}</span>
              <a href="https://t.me/lerkooow" target="_blank" rel="noopener noreferrer" className={s.link} aria-label="Open Telegram profile">
                @lerkooow
              </a>
            </div>
          </div>

          <div className={s.item}>
            <div className={s.left}>
              <span className={s.label}>{t("phone")}</span>

              <a href="tel:+79965797657" className={`${s.link} ${s.phone}`} aria-label="Call phone number +7 996 579 76 57">
                +7 <span className={s.muted}>996</span> 579-76-57
              </a>

              <a href="tel:+99655144593" className={`${s.link} ${s.phone}`} aria-label="Call phone number +996 551 44 59 3">
                +996 <span className={s.muted}>551</span> 44-59-3
              </a>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};
