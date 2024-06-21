import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./state-active.module.css";

export type StateActiveType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const StateActive: NextPage<StateActiveType> = ({
  className = "",
  propTop,
}) => {
  const stateActiveStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.stateactive, className].join(" ")}
      style={stateActiveStyle}
    >
      <div className={styles.emailAddressOr}>email address or username</div>
    </div>
  );
};

export default StateActive;
