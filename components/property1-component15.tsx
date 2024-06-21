import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-component15.module.css";

export type Property1Component15Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Property1Component15: NextPage<Property1Component15Type> = ({
  className = "",
  propTop,
  propBackgroundColor,
}) => {
  const property1Component53Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const rectangleDiv18Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.property1component53, className].join(" ")}
      style={property1Component53Style}
    >
      <div
        className={styles.property1component53Child}
        style={rectangleDiv18Style}
      />
      <div className={styles.mediaAndCommunications}>
        Media and Communications
      </div>
    </div>
  );
};

export default Property1Component15;
