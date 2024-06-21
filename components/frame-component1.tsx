import type { NextPage } from "next";
import Property1Component2Proper from "./property1-component2-proper";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.frameInner} />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <div className={styles.component105}>
        <Property1Component2Proper
          showRectangleDiv
          showShowWhatYou
          showEllipseIcon={false}
          property1Component2ProperPosition="absolute"
          property1Component2ProperTop="0%"
          property1Component2ProperLeft="0%"
          property1Component2ProperOverflow="unset"
          property1Component2ProperWidth="100%"
          property1Component2ProperHeight="100%"
          property1Component2ProperRight="0%"
          property1Component2ProperBottom="0%"
          rectangleDivBorder="1px solid var(--color-lightgray)"
          showWhatYouFontWeight="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
