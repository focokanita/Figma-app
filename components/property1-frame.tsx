import type { NextPage } from "next";
import styles from "./property1-frame.module.css";

export type Property1FrameType = {
  className?: string;
};

const Property1Frame: NextPage<Property1FrameType> = ({ className = "" }) => {
  return (
    <div className={[styles.property1frame21, className].join(" ")}>
      <div className={styles.login}>
        <div className={styles.login1}>Login</div>
      </div>
    </div>
  );
};

export default Property1Frame;
