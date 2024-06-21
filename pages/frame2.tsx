import type { NextPage } from "next";
import styles from "./frame2.module.css";

const Frame2: NextPage = () => {
  return (
    <div className={styles.uploadParent}>
      <img className={styles.uploadIcon} alt="" src="/upload@2x.png" />
    </div>
  );
};

export default Frame2;
