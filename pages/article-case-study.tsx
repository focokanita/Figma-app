import type { NextPage } from "next";
import styles from "./article-case-study.module.css";

const ArticleCaseStudy: NextPage = () => {
  return (
    <div className={styles.articleCaseStudyContainer}>
      <p className={styles.article}>{`article `}</p>
      <p className={styles.article}>{`case study `}</p>
      <p className={styles.article}>{`songs `}</p>
      <p className={styles.article}>photo</p>
      <p className={styles.article}>vr product</p>
    </div>
  );
};

export default ArticleCaseStudy;
