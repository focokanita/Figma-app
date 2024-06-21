import type { NextPage } from "next";
import styles from "./i-phone1415-pro16.module.css";

const IPhone1415Pro16: NextPage = () => {
  return (
    <div className={styles.iphone1415Pro19}>
      <img className={styles.loadingIcon} alt="" src="/loading@2x.png" />
      <div className={styles.pleaseWaitAnalysingContainer}>
        <p className={styles.pleaseWait}>Please wait</p>
        <p className={styles.pleaseWait}>Analysing your CV</p>
      </div>
      <div className={styles.statusBar}>
        <div className={styles.time}>
          <img className={styles.timeIcon} alt="" src="/time.svg" />
        </div>
        <div className={styles.time}>
          <div className={styles.dynamicIsland} />
        </div>
        <div className={styles.icons}>
          <img className={styles.receptionIcon} alt="" src="/reception.svg" />
          <img className={styles.receptionIcon} alt="" src="/wifi.svg" />
          <img className={styles.batteryIcon} alt="" src="/battery.svg" />
        </div>
      </div>
      <div className={styles.homeBar}>
        <div className={styles.rectangle} />
      </div>
    </div>
  );
};

export default IPhone1415Pro16;
