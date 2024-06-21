import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-variant4-icon.module.css";

export type Property1Variant4IconType = {
  className?: string;
  property1Variant4?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Property1Variant4Icon: NextPage<Property1Variant4IconType> = ({
  className = "",
  property1Variant4,
  propTop,
}) => {
  const property1Variant4IconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <img
      className={[styles.property1variant4Icon, className].join(" ")}
      alt=""
      src={property1Variant4}
      style={property1Variant4IconStyle}
    />
  );
};

export default Property1Variant4Icon;
