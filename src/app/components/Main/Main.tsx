import ShinyText from "@/components/ShinyText/ShinyText";

import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.main__container}>
        <p className={s.main__role}>Frontend developer</p>
        <h1 className={s.main__greeting}>
          Hello world! <br />
          I’m Valeriia — crafting smooth, modern <br />
          and user-friendly web interfaces
        </h1>
        <button className={s.main__button}>
          <ShinyText text="Find out more" speed={3} />
        </button>
      </div>
    </div>
  );
};
