import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component5.module.css";

export type Property1Component5Type = {
  className?: string;
  fitness?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component5: NextPage<Property1Component5Type> = ({
  className = "",
  fitness,
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component24Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv8Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const fitnessStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component24, className].join(" ")}
      style={property1Component24Style}
    >
      <div
        className={styles.property1component24Child}
        style={rectangleDiv8Style}
      />
      <div className={styles.fitness} style={fitnessStyle}>
        {fitness}
      </div>
    </div>
  );
};

export default Property1Component5;
