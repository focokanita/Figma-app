import type { NextPage } from "next";
import styles from "./property1-default21.module.css";

export type Property1Default2Type = {
  className?: string;
};

const Property1Default2: NextPage<Property1Default2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1default, className].join(" ")}>
      <div className={styles.register}>Register</div>
    </div>
  );
};

export default Property1Default2;
