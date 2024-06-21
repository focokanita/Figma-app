import type { NextPage } from "next";
import styles from "./property1-default1.module.css";

export type Property1Default1Type = {
  className?: string;
};

const Property1Default1: NextPage<Property1Default1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1default, className].join(" ")}>
      <div className={styles.getStarted}>Get Started</div>
      <div className={styles.tempimageocd2jm2} />
      <div className={styles.tempimageocd2jm3} />
      <div className={styles.tempimageocd2jm21} />
      <div className={styles.tempimageocd2jm1} />
    </div>
  );
};

export default Property1Default1;
