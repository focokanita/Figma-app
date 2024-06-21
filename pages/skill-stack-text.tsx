import type { NextPage } from "next";
import styles from "./skill-stack-text.module.css";

const SkillStackText: NextPage = () => {
  return (
    <div className={styles.skillstack}>
      <span>Skill</span>
      <span className={styles.stack}>Stack</span>
    </div>
  );
};

export default SkillStackText;
