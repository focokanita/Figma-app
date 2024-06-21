import type { NextPage } from "next";
import styles from "./skill-stack-text1.module.css";

const SkillStackText1: NextPage = () => {
  return (
    <div className={styles.skillstack}>
      <span>Skill</span>
      <span className={styles.stack}>Stack</span>
    </div>
  );
};

export default SkillStackText1;
