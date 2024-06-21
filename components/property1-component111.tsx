import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component111.module.css";

export type Property1Component11Type = {
  className?: string;
  engineering?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propTop1?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft1?: CSSProperties["left"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
  propTop2?: CSSProperties["top"];
  propLeft2?: CSSProperties["left"];
};

const Property1Component11: NextPage<Property1Component11Type> = ({
  className = "",
  engineering,
  propTop,
  propLeft,
  propOverflow,
  propWidth,
  propHeight,
  propBackgroundColor,
  propBoxShadow,
  propHeight1,
  propWidth1,
  propTop1,
  propRight,
  propBottom,
  propLeft1,
  propFontWeight,
  propFontFamily,
  propTop2,
  propLeft2,
}) => {
  const property1Component41Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      overflow: propOverflow,
      width: propWidth,
      height: propHeight,
    };
  }, [propTop, propLeft, propOverflow, propWidth, propHeight]);

  const rectangleDiv14Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
      height: propHeight1,
      width: propWidth1,
      top: propTop1,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
    };
  }, [
    propBackgroundColor,
    propBoxShadow,
    propHeight1,
    propWidth1,
    propTop1,
    propRight,
    propBottom,
    propLeft1,
  ]);

  const engineeringStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
      top: propTop2,
      left: propLeft2,
    };
  }, [propFontWeight, propFontFamily, propTop2, propLeft2]);

  return (
    <div
      className={[styles.property1component41, className].join(" ")}
      style={property1Component41Style}
    >
      <div
        className={styles.property1component41Child}
        style={rectangleDiv14Style}
      />
      <div className={styles.engineering} style={engineeringStyle}>
        {engineering}
      </div>
    </div>
  );
};

export default Property1Component11;
