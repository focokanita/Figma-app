import type { NextPage } from "next";
import styles from "./property1-frame1.module.css";

export type Property1Frame1Type = {
  className?: string;
};

const Property1Frame1: NextPage<Property1Frame1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.property1frame22, className].join(" ")}>
      <div className={styles.login}>Login</div>
    </div>
  );
};

export default Property1Frame1;
