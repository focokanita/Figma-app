import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component11.module.css";

export type Property1Component1Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propOverflowY?: CSSProperties["overflowY"];
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component1: NextPage<Property1Component1Type> = ({
  className = "",
  propTop,
  propOverflowY,
  propLeft,
  propBoxShadow,
  propBackgroundColor,
  propBoxShadow1,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component11Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      overflowY: propOverflowY,
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propTop, propOverflowY, propLeft, propBoxShadow]);

  const rectangleDiv4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow1,
    };
  }, [propBackgroundColor, propBoxShadow1]);

  const legalStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component11, className].join(" ")}
      style={property1Component11Style}
    >
      <div
        className={styles.property1component11Child}
        style={rectangleDiv4Style}
      />
      <div className={styles.legal} style={legalStyle}>
        Legal
      </div>
    </div>
  );
};

export default Property1Component1;
