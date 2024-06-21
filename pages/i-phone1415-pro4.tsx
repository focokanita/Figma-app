import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./i-phone1415-pro4.module.css";

const IPhone1415Pro4: NextPage = () => {
  const router = useRouter();

  const onProperty1VectorIconClick = useCallback(() => {
    router.push("/i-phone1415-pro13");
  }, [router]);

  return (
    <div className={styles.iphone1415Pro21}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" />
        <img className={styles.heartIcon} alt="" src="/heart.svg" />
        <img
          className={styles.component98globeIcon}
          alt=""
          src="/component-98globe.svg"
        />
        <div className={styles.component100}>
          <img
            className={styles.property1vectorIcon}
            alt=""
            src="/property-1vector@2x.png"
          />
          <img
            className={styles.property1variant6Icon}
            alt=""
            src="/property-1variant6@2x.png"
          />
          <img
            className={styles.property1variant5Icon}
            alt=""
            src="/property-1variant5@2x.png"
          />
          <img
            className={styles.property1boxIcon}
            alt=""
            src="/property-1box.svg"
          />
          <img
            className={styles.property1smartphoneIcon}
            alt=""
            src="/property-1smartphone.svg"
          />
        </div>
        <div className={styles.component1001}>
          <img
            className={styles.property1vectorIcon}
            alt=""
            src="/property-1vector@2x.png"
          />
          <img
            className={styles.property1variant6Icon}
            alt=""
            src="/property-1variant6@2x.png"
          />
          <img
            className={styles.property1variant5Icon}
            alt=""
            src="/property-1variant5@2x.png"
          />
          <img
            className={styles.property1boxIcon}
            alt=""
            src="/property-1box.svg"
          />
          <img
            className={styles.property1smartphoneIcon}
            alt=""
            src="/property-1smartphone.svg"
          />
        </div>
        <img className={styles.homeIcon} alt="" src="/home.svg" />
        <div className={styles.component99}>
          <img
            className={styles.property1userCheckIcon}
            alt=""
            src="/property-1usercheck.svg"
          />
          <img
            className={styles.property1vectorIcon2}
            alt=""
            src="/property-1vector.svg"
          />
        </div>
        <div className={styles.homeBar}>
          <div className={styles.rectangle} />
        </div>
      </div>
      <div className={styles.iphone1415Pro21Child} />
      <div className={styles.vectorGroup}>
        <img className={styles.vectorIcon} alt="" />
        <img className={styles.heartIcon} alt="" src="/heart1.svg" />
        <img
          className={styles.component98globeIcon}
          alt=""
          src="/component-98globe.svg"
        />
        <div className={styles.component100}>
          <img
            className={styles.property1vectorIcon}
            alt=""
            src="/property-1vector@2x.png"
          />
          <img
            className={styles.property1variant6Icon}
            alt=""
            src="/property-1variant6@2x.png"
          />
          <img
            className={styles.property1variant5Icon}
            alt=""
            src="/property-1variant5@2x.png"
          />
          <img
            className={styles.property1boxIcon}
            alt=""
            src="/property-1box.svg"
          />
          <img
            className={styles.property1smartphoneIcon}
            alt=""
            src="/property-1smartphone.svg"
          />
        </div>
        <div className={styles.component1001}>
          <img
            className={styles.property1vectorIcon}
            alt=""
            src="/property-1vector@2x.png"
          />
          <img
            className={styles.property1variant6Icon}
            alt=""
            src="/property-1variant6@2x.png"
          />
          <img
            className={styles.property1variant5Icon}
            alt=""
            src="/property-1variant5@2x.png"
          />
          <img
            className={styles.property1boxIcon}
            alt=""
            src="/property-1box.svg"
          />
          <img
            className={styles.property1smartphoneIcon}
            alt=""
            src="/property-1smartphone.svg"
          />
        </div>
        <img className={styles.homeIcon} alt="" src="/home.svg" />
        <div className={styles.component99}>
          <img
            className={styles.property1userCheckIcon}
            alt=""
            src="/property-1usercheck.svg"
          />
          <img
            className={styles.property1vectorIcon5}
            alt=""
            src="/property-1vector.svg"
            onClick={onProperty1VectorIconClick}
          />
        </div>
        <div className={styles.homeBar1} />
      </div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.rectangle1} />
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
    </div>
  );
};

export default IPhone1415Pro4;
