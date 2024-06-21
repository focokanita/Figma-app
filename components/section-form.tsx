import type { NextPage } from "next";
import styles from "./section-form.module.css";

export type SectionFormType = {
  className?: string;
};

const SectionForm: NextPage<SectionFormType> = ({ className = "" }) => {
  return (
    <div className={[styles.iphone1415Pro20Inner, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.rectangleDiv} />
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
