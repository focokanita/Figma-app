import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-variant3-icon.module.css";

export type Property1Variant3IconType = {
  className?: string;
  property1Variant3?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Property1Variant3Icon: NextPage<Property1Variant3IconType> = ({
  className = "",
  property1Variant3,
  propTop,
}) => {
  const property1Variant3IconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <img
      className={[styles.property1variant3Icon, className].join(" ")}
      alt=""
      src={property1Variant3}
      style={property1Variant3IconStyle}
    />
  );
};

export default Property1Variant3Icon;
