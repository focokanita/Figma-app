import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-variant.module.css";

export type Property1VariantType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const Property1Variant: NextPage<Property1VariantType> = ({
  className = "",
  propTop,
}) => {
  const property1Variant2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.property1variant2, className].join(" ")}
      style={property1Variant2Style}
    >
      <div className={styles.emailAddressOr}>email address or username</div>
    </div>
  );
};

export default Property1Variant;
