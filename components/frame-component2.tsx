import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Property1Component11 from "./property1-component11";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];

  /** Action props */
  onXIconClick?: () => void;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  propTop,
  onXIconClick,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.component103Parent, className].join(" ")}
      style={frameDivStyle}
    >
      <img
        className={styles.component103Icon}
        alt=""
        src="/component-102.svg"
      />
      <div
        className={styles.letsGetYour}
      >{`Let’s get your request ready to send `}</div>
      <b className={styles.whatAreYou}>What are you looking to design...</b>
      <Property1Component11
        propTop="149px"
        propLeft="40px"
        propOverflow="unset"
        propWidth="354px"
        propHeight="49px"
        propBackgroundColor="#fff"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0)"
        propHeight1="104.08%"
        propWidth1="100.56%"
        propTop1="-2.04%"
        propRight="-0.28%"
        propBottom="-2.04%"
        propLeft1="-0.28%"
        propFontWeight="500"
        propFontFamily="Roboto"
        propTop2="16.73%"
        propLeft2="12.82%"
      />
      <Property1Component11
        propTop="360px"
        propLeft="44px"
        propOverflow="unset"
        propWidth="332px"
        propHeight="126px"
        propBackgroundColor="#fff"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0)"
        propHeight1="101.59%"
        propWidth1="100.6%"
        propTop1="-0.79%"
        propRight="-0.3%"
        propBottom="-0.79%"
        propLeft1="-0.3%"
        propFontWeight="500"
        propFontFamily="Roboto"
        propTop2="16.67%"
        propLeft2="12.83%"
      />
      <div className={styles.lookingToAdd}>
        Looking to add another landing page to my current Webflow site...
      </div>
      <div className={styles.egLandingPage}>e.g. landing page, iOS icon</div>
      <b className={styles.howUrgentIs}>How urgent is your request?</b>
      <div className={styles.asapWrapper}>
        <div className={styles.asap}>ASAP</div>
      </div>
      <div className={styles.withinTheNextMonthWrapper}>
        <div className={styles.withinTheNext}>Within the next month</div>
      </div>
      <div className={styles.notUrgentWrapper}>
        <div className={styles.notUrgent}>Not urgent</div>
      </div>
      <div className={styles.sendRequestWrapper}>
        <div className={styles.sendRequest}>Send Request</div>
      </div>
      <b className={styles.tellUsMore}>Tell us more about the project*</b>
      <img
        className={styles.xIcon}
        alt=""
        src="/x.svg"
        onClick={onXIconClick}
      />
    </div>
  );
};

export default FrameComponent2;
