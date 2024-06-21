import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component3.module.css";

export type Property1Component3Type = {
  className?: string;
  informationTechnology?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBoxShadow1?: CSSProperties["boxShadow"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Property1Component3: NextPage<Property1Component3Type> = ({
  className = "",
  informationTechnology,
  propTop,
  propLeft,
  propBoxShadow,
  propBackgroundColor,
  propBoxShadow1,
  propFontWeight,
  propFontFamily,
}) => {
  const property1Component17Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      boxShadow: propBoxShadow,
    };
  }, [propTop, propLeft, propBoxShadow]);

  const rectangleDiv6Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow1,
    };
  }, [propBackgroundColor, propBoxShadow1]);

  const informationTechnologyStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <div
      className={[styles.property1component17, className].join(" ")}
      style={property1Component17Style}
    >
      <div
        className={styles.property1component17Child}
        style={rectangleDiv6Style}
      />
      <div
        className={styles.informationTechnology}
        style={informationTechnologyStyle}
      >
        {informationTechnology}
      </div>
    </div>
  );
};

export default Property1Component3;
