import type { NextPage } from "next";
import Property1Default2 from "../components/property1-default2";
import styles from "./frame-component-set1.module.css";

const FrameComponentSet1: NextPage = () => {
  return (
    <div className={styles.property1defaultParent}>
      <Property1Default2 />
      <div className={styles.property1default}>
        <div className={styles.register}>
          <div className={styles.register1}>Register</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponentSet1;
