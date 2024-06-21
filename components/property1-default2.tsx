import type { NextPage } from "next";
import styles from "./property1-default2.module.css";

export type Property1DefaultType = {
  className?: string;
};

const Property1Default: NextPage<Property1DefaultType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1default, className].join(" ")}>
      <div className={styles.getStarted}>Get Started</div>
    </div>
  );
};

export default Property1Default;
