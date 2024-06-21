import type { NextPage } from "next";
import { useCallback } from "react";
import Component101VectorIcon from "../components/component101-vector-icon";
import Component101userCheckIcon from "../components/component101user-check-icon";
import { useRouter } from "next/router";
import styles from "./i-phone1415-pro15.module.css";

const IPhone1415Pro15: NextPage = () => {
  const router = useRouter();

  const onHomeIconClick = useCallback(() => {
    router.push("/i-phone1415-pro1");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/i-phone1415-pro13");
  }, [router]);

  return (
    <div className={styles.iphone1415Pro15}>
      <div className={styles.settings}>Settings</div>
      <div className={styles.accountSettings}>{`Account Settings `}</div>
      <div className={styles.editProfile}>Edit profile</div>
      <div className={styles.changePassword}>Change password</div>
      <div className={styles.newUpdates}>New Updates</div>
      <div className={styles.pushNotifications}>Push notifications</div>
      <div className={styles.darkMode}>Dark mode</div>
      <div className={styles.more}>{`More `}</div>
      <div className={styles.aboutUs}>{`About us `}</div>
      <div className={styles.privacyPolicy}>Privacy policy</div>
      <div className={styles.termsAndConditions}>Terms and conditions</div>
      <div className={styles.iphone1415Pro15Child} />
      <Component101VectorIcon
        component101VectorIconCom="/component-101vector.svg"
        component101VectorIconWidth="120px"
        component101VectorIconOverflow="unset"
        component101VectorIconHeight="120px"
        component101VectorIconPosition="absolute"
        component101VectorIconTop="140px"
        component101VectorIconLeft="136px"
      />
      <Component101userCheckIcon
        component101userCheckIcon="/component-101usercheck.svg"
        component101userCheckIconWidth="100px"
        component101userCheckIconHeight="100px"
        component101userCheckIconPosition="absolute"
        component101userCheckIconTop="150px"
        component101userCheckIconLeft="162px"
      />
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
      <div className={styles.iphone1415Pro15Item} />
      <div className={styles.vectorGroup}>
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
        <img
          className={styles.homeIcon1}
          alt=""
          src="/home.svg"
          onClick={onHomeIconClick}
        />
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
        <div className={styles.homeBar1} />
      </div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.rectangle1} />
      </div>
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector17.svg"
        onClick={onVectorIconClick}
      />
      <img className={styles.toggleOffIcon} alt="" src="/toggle-off@2x.png" />
      <div className={styles.statusBar}>
        <div className={styles.time}>
          <img className={styles.timeIcon} alt="" src="/time.svg" />
        </div>
        <div className={styles.dynamicIslandFrame}>
          <div className={styles.dynamicIsland} />
        </div>
        <div className={styles.icons}>
          <img className={styles.receptionIcon} alt="" src="/reception.svg" />
          <img className={styles.receptionIcon} alt="" src="/wifi.svg" />
          <img className={styles.batteryIcon} alt="" src="/battery.svg" />
        </div>
      </div>
      <img className={styles.forwardIcon} alt="" src="/forward@2x.png" />
      <img className={styles.forwardIcon1} alt="" src="/forward@2x.png" />
      <img className={styles.forwardIcon2} alt="" src="/forward@2x.png" />
      <img className={styles.forwardIcon3} alt="" src="/forward@2x.png" />
      <img className={styles.forwardIcon4} alt="" src="/forward@2x.png" />
      <img className={styles.forwardIcon5} alt="" src="/forward@2x.png" />
    </div>
  );
};

export default IPhone1415Pro15;
