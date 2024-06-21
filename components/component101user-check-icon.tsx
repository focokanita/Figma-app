import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component101user-check-icon.module.css";

export type Component101userCheckIconType = {
  className?: string;
  component101userCheckIcon?: string;

  /** Style props */
  component101userCheckIconWidth?: CSSProperties["width"];
  component101userCheckIconHeight?: CSSProperties["height"];
  component101userCheckIconPosition?: CSSProperties["position"];
  component101userCheckIconTop?: CSSProperties["top"];
  component101userCheckIconLeft?: CSSProperties["left"];
};

const Component101userCheckIcon: NextPage<Component101userCheckIconType> = ({
  className = "",
  component101userCheckIcon,
  component101userCheckIconWidth,
  component101userCheckIconHeight,
  component101userCheckIconPosition,
  component101userCheckIconTop,
  component101userCheckIconLeft,
}) => {
  const component101userCheckIconStyle: CSSProperties = useMemo(() => {
    return {
      width: component101userCheckIconWidth,
      height: component101userCheckIconHeight,
      position: component101userCheckIconPosition,
      top: component101userCheckIconTop,
      left: component101userCheckIconLeft,
    };
  }, [
    component101userCheckIconWidth,
    component101userCheckIconHeight,
    component101userCheckIconPosition,
    component101userCheckIconTop,
    component101userCheckIconLeft,
  ]);

  return (
    <img
      className={[styles.component101userCheckIcon, className].join(" ")}
      alt=""
      src={component101userCheckIcon}
      style={component101userCheckIconStyle}
    />
  );
};

export default Component101userCheckIcon;
