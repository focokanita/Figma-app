import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component7.module.css";

export type Property1Component7Type = {
  className?: string;
  transportationAndLogistic?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component7: NextPage<Property1Component7Type> = ({
  className = "",
  transportationAndLogistic,
  propTop,
  propLeft,
  propBoxShadow,
  propBackgroundColor,
  propBoxShadow1,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component29Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propTop, propLeft, propBoxShadow]);

  const rectangleDiv10Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow1,
    };
  }, [propBackgroundColor, propBoxShadow1]);

  const transportationAndLogisticsStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component29, className].join(" ")}
      style={property1Component29Style}
    >
      <div
        className={styles.property1component29Child}
        style={rectangleDiv10Style}
      />
      <div
        className={styles.transportationAndLogistics}
        style={transportationAndLogisticsStyle}
      >
        {transportationAndLogistic}
      </div>
    </div>
  );
};

export default Property1Component7;
