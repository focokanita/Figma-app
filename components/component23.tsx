import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component23.module.css";

export type Component23Type = {
  className?: string;
  nEXT?: string;

  /** Style props */
  component6Width?: CSSProperties["width"];
  component6Height?: CSSProperties["height"];
  component6Position?: CSSProperties["position"];
  component6Top?: CSSProperties["top"];
  component6Right?: CSSProperties["right"];
  component6Bottom?: CSSProperties["bottom"];
  component6Left?: CSSProperties["left"];
  rectangleDivBorder?: CSSProperties["border"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor1?: CSSProperties["backgroundColor"];
  rectangleDivBorder1?: CSSProperties["border"];
  nEXTFontSize?: CSSProperties["fontSize"];
  nEXTLetterSpacing?: CSSProperties["letterSpacing"];
  nEXTLeft?: CSSProperties["left"];
  nEXTColor?: CSSProperties["color"];
  nEXTFontWeight?: CSSProperties["fontWeight"];
  nEXTHeight?: CSSProperties["height"];
  nEXTTop?: CSSProperties["top"];
  nEXTWidth?: CSSProperties["width"];
};

const Component23: NextPage<Component23Type> = ({
  className = "",
  nEXT,
  component6Width,
  component6Height,
  component6Position,
  component6Top,
  component6Right,
  component6Bottom,
  component6Left,
  rectangleDivBorder,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  rectangleDivBorder1,
  nEXTFontSize,
  nEXTLetterSpacing,
  nEXTLeft,
  nEXTColor,
  nEXTFontWeight,
  nEXTHeight,
  nEXTTop,
  nEXTWidth,
}) => {
  const component6Style: CSSProperties = useMemo(() => {
    return {
      width: component6Width,
      height: component6Height,
      position: component6Position,
      top: component6Top,
      right: component6Right,
      bottom: component6Bottom,
      left: component6Left,
    };
  }, [
    component6Width,
    component6Height,
    component6Position,
    component6Top,
    component6Right,
    component6Bottom,
    component6Left,
  ]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      border: rectangleDivBorder,
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBorder, rectangleDivBackgroundColor]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
      border: rectangleDivBorder1,
    };
  }, [rectangleDivBackgroundColor1, rectangleDivBorder1]);

  const nEXTStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: nEXTFontSize,
      letterSpacing: nEXTLetterSpacing,
      left: nEXTLeft,
      color: nEXTColor,
      fontWeight: nEXTFontWeight,
      height: nEXTHeight,
      top: nEXTTop,
      width: nEXTWidth,
    };
  }, [
    nEXTFontSize,
    nEXTLetterSpacing,
    nEXTLeft,
    nEXTColor,
    nEXTFontWeight,
    nEXTHeight,
    nEXTTop,
    nEXTWidth,
  ]);

  return (
    <div
      className={[styles.component6, className].join(" ")}
      style={component6Style}
    >
      <div className={styles.component6Child} style={rectangleDiv1Style} />
      <div className={styles.component6Child} style={rectangleDiv2Style} />
      <b className={styles.next} style={nEXTStyle}>
        {nEXT}
      </b>
    </div>
  );
};

export default Component23;
