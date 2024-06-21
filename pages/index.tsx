import type { NextPage } from "next";
import styles from "./index.module.css";

const HomeBar: NextPage = () => {
  return (
    <div className={styles.homeBar}>
      <div className={styles.rectangle} />
    </div>
  );
};

export default HomeBar;
