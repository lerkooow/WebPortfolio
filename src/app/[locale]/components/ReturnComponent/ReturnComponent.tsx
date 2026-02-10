import Link from "next/link";
import Image from "next/image";

import s from "./ReturnComponent.module.scss";

type TReturnComponentProps = {
  title?: string;
  href: string;
};

export const ReturnComponent = ({ title, href }: TReturnComponentProps) => {
  return (
    <div className={s.returnComponent}>
      <Link href={href}>
        <Image src="/arrow.svg" alt="arrow back main page" width={24} height={24} className="rotate-90 animate-pulse cursor-pointer" />
      </Link>
      {title && <h1>{title}</h1>}
      <div></div>
    </div>
  );
};
