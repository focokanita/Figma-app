import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component6.module.css";

export type Property1Component6Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component6: NextPage<Property1Component6Type> = ({
  className = "",
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component26Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv9Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const businessAndFinanceStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component26, className].join(" ")}
      style={property1Component26Style}
    >
      <div
        className={styles.property1component26Child}
        style={rectangleDiv9Style}
      />
      <div
        className={styles.businessAndFinance}
        style={businessAndFinanceStyle}
      >
        Business and Finance
      </div>
    </div>
  );
};

export default Property1Component6;
