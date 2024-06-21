import type { NextPage } from "next";
import Property1Component2Proper from "./property1-component2-proper";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.component105Wrapper, className].join(" ")}>
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

export default FrameComponent;
