import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component4.module.css";

export type Property1Component4Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component4: NextPage<Property1Component4Type> = ({
  className = "",
  propTop,
  propLeft,
  propBackgroundColor,
  propBoxShadow,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component20Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv7Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const salesAndMarketingStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component20, className].join(" ")}
      style={property1Component20Style}
    >
      <div
        className={styles.property1component20Child}
        style={rectangleDiv7Style}
      />
      <div className={styles.salesAndMarketing} style={salesAndMarketingStyle}>
        Sales and Marketing
      </div>
    </div>
  );
};

export default Property1Component4;
