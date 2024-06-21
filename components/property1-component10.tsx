import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component10.module.css";

export type Property1Component10Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component10: NextPage<Property1Component10Type> = ({
  className = "",
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component38Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv13Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const healthcareStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component38, className].join(" ")}
      style={property1Component38Style}
    >
      <div
        className={styles.property1component38Child}
        style={rectangleDiv13Style}
      />
      <div className={styles.healthcare} style={healthcareStyle}>
        Healthcare
      </div>
    </div>
  );
};

export default Property1Component10;
