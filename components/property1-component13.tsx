import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component13.module.css";

export type Property1Component13Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component13: NextPage<Property1Component13Type> = ({
  className = "",
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component47Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv16Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const educationStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component47, className].join(" ")}
      style={property1Component47Style}
    >
      <div
        className={styles.property1component47Child}
        style={rectangleDiv16Style}
      />
      <div className={styles.education} style={educationStyle}>
        Education
      </div>
    </div>
  );
};

export default Property1Component13;
