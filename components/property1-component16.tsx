import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component16.module.css";

export type Property1Component16Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component16: NextPage<Property1Component16Type> = ({
  className = "",
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component56Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv19Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const fashionStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component56, className].join(" ")}
      style={property1Component56Style}
    >
      <div
        className={styles.property1component56Child}
        style={rectangleDiv19Style}
      />
      <div className={styles.fashion} style={fashionStyle}>
        Fashion
      </div>
    </div>
  );
};

export default Property1Component16;
