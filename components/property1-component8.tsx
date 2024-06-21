import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component8.module.css";

export type Property1Component8Type = {
  className?: string;
  hospitalityAndTourism?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component8: NextPage<Property1Component8Type> = ({
  className = "",
  hospitalityAndTourism,
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontFamily,
}) => {
  const property1Component32Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv11Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const hospitalityAndTourismStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: propFontFamily,
    };
  }, [propFontFamily]);

  return (
    <div
      className={[styles.property1component32, className].join(" ")}
      style={property1Component32Style}
    >
      <div
        className={styles.property1component32Child}
        style={rectangleDiv11Style}
      />
      <div
        className={styles.hospitalityAndTourism}
        style={hospitalityAndTourismStyle}
      >
        {hospitalityAndTourism}
      </div>
    </div>
  );
};

export default Property1Component8;
