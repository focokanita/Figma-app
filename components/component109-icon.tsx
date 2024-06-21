import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component109-icon.module.css";

export type Component109IconType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Component109Icon: NextPage<Component109IconType> = ({
  className = "",
  propTop,
}) => {
  const component109IconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <img
      className={[styles.component109Icon, className].join(" ")}
      alt=""
      src="/component-109.svg"
      style={component109IconStyle}
    />
  );
};

export default Component109Icon;
