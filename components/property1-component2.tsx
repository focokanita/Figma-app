import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component2.module.css";

export type Property1ComponentType = {
  className?: string;
  scienceAndResearch?: string;
  showScienceAndResearch?: boolean;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propTop1?: CSSProperties["top"];
  propRight1?: CSSProperties["right"];
  propBottom1?: CSSProperties["bottom"];
  propLeft1?: CSSProperties["left"];
  propBorder?: CSSProperties["border"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
  propWidth2?: CSSProperties["width"];
  propTop2?: CSSProperties["top"];
  propLeft2?: CSSProperties["left"];
  propColor?: CSSProperties["color"];
  propFontSize?: CSSProperties["fontSize"];
};

const Property1Component: NextPage<Property1ComponentType> = ({
  className = "",
  scienceAndResearch,
  showScienceAndResearch,
  propTop,
  propLeft,
  propBoxShadow,
  propWidth,
  propHeight,
  propBorderRadius,
  propBackgroundColor,
  propRight,
  propBottom,
  propBackgroundColor1,
  propBoxShadow1,
  propHeight1,
  propWidth1,
  propTop1,
  propRight1,
  propBottom1,
  propLeft1,
  propBorder,
  propFontWeight,
  propFontFamily,
  propWidth2,
  propTop2,
  propLeft2,
  propColor,
  propFontSize,
}) => {
  const property1Component8Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      boxShadow: propBoxShadow,
      width: propWidth,
      height: propHeight,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      right: propRight,
      bottom: propBottom,
    };
  }, [
    propTop,
    propLeft,
    propBoxShadow,
    propWidth,
    propHeight,
    propBorderRadius,
    propBackgroundColor,
    propRight,
    propBottom,
  ]);

  const rectangleDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      boxShadow: propBoxShadow1,
      height: propHeight1,
      width: propWidth1,
      top: propTop1,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft1,
      border: propBorder,
    };
  }, [
    propBackgroundColor1,
    propBoxShadow1,
    propHeight1,
    propWidth1,
    propTop1,
    propRight1,
    propBottom1,
    propLeft1,
    propBorder,
  ]);

  const scienceAndResearchStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
      width: propWidth2,
      top: propTop2,
      left: propLeft2,
      color: propColor,
      fontSize: propFontSize,
    };
  }, [
    propFontWeight,
    propFontFamily,
    propWidth2,
    propTop2,
    propLeft2,
    propColor,
    propFontSize,
  ]);

  return (
    <div
      className={[styles.property1component8, className].join(" ")}
      style={property1Component8Style}
    >
      <div
        className={styles.property1component8Child}
        style={rectangleDiv3Style}
      />
      {showScienceAndResearch && (
        <div
          className={styles.scienceAndResearch}
          style={scienceAndResearchStyle}
        >
          {scienceAndResearch}
        </div>
      )}
    </div>
  );
};

export default Property1Component;
