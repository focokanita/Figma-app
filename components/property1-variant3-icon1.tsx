import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-variant3-icon1.module.css";

export type Property1Variant3Icon1Type = {
  className?: string;
  property1Variant3?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Property1Variant3Icon1: NextPage<Property1Variant3Icon1Type> = ({
  className = "",
  property1Variant3,
  propTop,
}) => {
  const property1Variant3Icon1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <img
      className={[styles.property1variant3Icon, className].join(" ")}
      alt=""
      src={property1Variant3}
      style={property1Variant3Icon1Style}
    />
  );
};

export default Property1Variant3Icon1;
