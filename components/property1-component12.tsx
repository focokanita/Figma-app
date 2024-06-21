import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component12.module.css";

export type Property1Component12Type = {
  className?: string;
  manufacturingAndProductio?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component12: NextPage<Property1Component12Type> = ({
  className = "",
  manufacturingAndProductio,
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontFamily,
}) => {
  const property1Component44Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv15Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const manufacturingAndProductionStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: propFontFamily,
    };
  }, [propFontFamily]);

  return (
    <div
      className={[styles.property1component44, className].join(" ")}
      style={property1Component44Style}
    >
      <div
        className={styles.property1component44Child}
        style={rectangleDiv15Style}
      />
      <div
        className={styles.manufacturingAndProduction}
        style={manufacturingAndProductionStyle}
      >
        {manufacturingAndProductio}
      </div>
    </div>
  );
};

export default Property1Component12;
