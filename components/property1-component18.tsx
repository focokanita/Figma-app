import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Property1Component1 from "./property1-component1";
import styles from "./property1-component18.module.css";

export type Property1Component18Type = {
  className?: string;
  continueButtonText?: string;
  showContinue?: boolean;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  component92BackgroundColor?: CSSProperties["backgroundColor"];
  component92Border?: CSSProperties["border"];
  component8BackgroundColor?: CSSProperties["backgroundColor"];
  component6Width?: CSSProperties["width"];
  nEXTLeft?: CSSProperties["left"];
  propColor?: CSSProperties["color"];
  propLeft1?: CSSProperties["left"];

  /** Action props */
  onComponent108ContainerClick?: () => void;
};

const Property1Component18: NextPage<Property1Component18Type> = ({
  className = "",
  continueButtonText,
  showContinue,
  propTop,
  propLeft,
  propWidth,
  component92BackgroundColor,
  component92Border,
  component8BackgroundColor,
  component6Width,
  nEXTLeft,
  propColor,
  propLeft1,
  onComponent108ContainerClick,
}) => {
  const property1Component106Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propTop, propLeft, propWidth]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: component92BackgroundColor,
      border: component92Border,
    };
  }, [component92BackgroundColor, component92Border]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: component8BackgroundColor,
    };
  }, [component8BackgroundColor]);

  const nEXTStyle: CSSProperties = useMemo(() => {
    return {
      width: component6Width,
    };
  }, [component6Width]);

  const continueStyle: CSSProperties = useMemo(() => {
    return {
      left: nEXTLeft,
    };
  }, [nEXTLeft]);

  const continue1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      left: propLeft1,
    };
  }, [propColor, propLeft1]);

  return (
    <div
      className={[styles.property1component106, className].join(" ")}
      style={property1Component106Style}
      onClick={onComponent108ContainerClick}
    >
      <Property1Component1
        property1Component89Width="100%"
        property1Component89Height="100%"
        property1Component89Position="absolute"
        property1Component89Top="0%"
        property1Component89Left="0%"
        property1Component89Right="0%"
        property1Component89Bottom="0%"
        component8BorderRadius="unset"
        rectangleDivBackgroundColor="rgba(255, 255, 255, 0.8)"
        rectangleDivBorder="1px solid var(--color-darkslategray)"
        rectangleDivBackgroundColor1="1px solid #00565c"
        nEXTHeight="71.58%"
        nEXTTop="13.16%"
        nEXTLeft="7.73%"
        nEXTWidth="81.25%"
        continueHeight="56.58%"
        continueWidth="46.26%"
        continueTop="20.79%"
        continueLeft="27.51%"
        continueFontSize="16px"
        continueFontWeight="600"
        continueFontFamily="Roboto"
        continueColor="1px solid #00565c"
      />
      {showContinue && (
        <b className={styles.continue} style={continue1Style}>
          {continueButtonText}
        </b>
      )}
    </div>
  );
};

export default Property1Component18;
