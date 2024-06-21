import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component101-vector-icon.module.css";

export type Component101VectorIconType = {
  className?: string;
  component101VectorIconCom?: string;

  /** Style props */
  component101VectorIconWidth?: CSSProperties["width"];
  component101VectorIconOverflow?: CSSProperties["overflow"];
  component101VectorIconHeight?: CSSProperties["height"];
  component101VectorIconPosition?: CSSProperties["position"];
  component101VectorIconTop?: CSSProperties["top"];
  component101VectorIconLeft?: CSSProperties["left"];
};

const Component101VectorIcon: NextPage<Component101VectorIconType> = ({
  className = "",
  component101VectorIconCom,
  component101VectorIconWidth,
  component101VectorIconOverflow,
  component101VectorIconHeight,
  component101VectorIconPosition,
  component101VectorIconTop,
  component101VectorIconLeft,
}) => {
  const component101VectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: component101VectorIconWidth,
      overflow: component101VectorIconOverflow,
      height: component101VectorIconHeight,
      position: component101VectorIconPosition,
      top: component101VectorIconTop,
      left: component101VectorIconLeft,
    };
  }, [
    component101VectorIconWidth,
    component101VectorIconOverflow,
    component101VectorIconHeight,
    component101VectorIconPosition,
    component101VectorIconTop,
    component101VectorIconLeft,
  ]);

  return (
    <img
      className={[styles.component101vectorIcon, className].join(" ")}
      alt=""
      src={component101VectorIconCom}
      style={component101VectorIconStyle}
    />
  );
};

export default Component101VectorIcon;
