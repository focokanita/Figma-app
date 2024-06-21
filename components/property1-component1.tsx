import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Component23 from "./component23";
import styles from "./property1-component1.module.css";

export type Property1Component1Type = {
  className?: string;
  continue1?: string;

  /** Style props */
  property1Component89Width?: CSSProperties["width"];
  property1Component89Height?: CSSProperties["height"];
  property1Component89Position?: CSSProperties["position"];
  property1Component89Top?: CSSProperties["top"];
  property1Component89Left?: CSSProperties["left"];
  property1Component89Right?: CSSProperties["right"];
  property1Component89Bottom?: CSSProperties["bottom"];
  component8BorderRadius?: CSSProperties["borderRadius"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBorder?: CSSProperties["border"];
  rectangleDivBackgroundColor1?: CSSProperties["backgroundColor"];
  nEXTHeight?: CSSProperties["height"];
  nEXTTop?: CSSProperties["top"];
  nEXTLeft?: CSSProperties["left"];
  nEXTWidth?: CSSProperties["width"];
  continueHeight?: CSSProperties["height"];
  continueWidth?: CSSProperties["width"];
  continueTop?: CSSProperties["top"];
  continueLeft?: CSSProperties["left"];
  continueFontSize?: CSSProperties["fontSize"];
  continueFontWeight?: CSSProperties["fontWeight"];
  continueFontFamily?: CSSProperties["fontFamily"];
  continueColor?: CSSProperties["color"];
};

const Property1Component1: NextPage<Property1Component1Type> = ({
  className = "",
  continue1,
  property1Component89Width,
  property1Component89Height,
  property1Component89Position,
  property1Component89Top,
  property1Component89Left,
  property1Component89Right,
  property1Component89Bottom,
  component8BorderRadius,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  rectangleDivBackgroundColor1,
  nEXTHeight,
  nEXTTop,
  nEXTLeft,
  nEXTWidth,
  continueHeight,
  continueWidth,
  continueTop,
  continueLeft,
  continueFontSize,
  continueFontWeight,
  continueFontFamily,
  continueColor,
}) => {
  const property1Component89Style: CSSProperties = useMemo(() => {
    return {
      width: property1Component89Width,
      height: property1Component89Height,
      position: property1Component89Position,
      top: property1Component89Top,
      left: property1Component89Left,
      right: property1Component89Right,
      bottom: property1Component89Bottom,
    };
  }, [
    property1Component89Width,
    property1Component89Height,
    property1Component89Position,
    property1Component89Top,
    property1Component89Left,
    property1Component89Right,
    property1Component89Bottom,
  ]);

  const component8Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: component8BorderRadius,
    };
  }, [component8BorderRadius]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
    };
  }, [rectangleDivBackgroundColor, rectangleDivBorder]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [rectangleDivBackgroundColor1]);

  const nEXTStyle: CSSProperties = useMemo(() => {
    return {
      height: nEXTHeight,
      top: nEXTTop,
      left: nEXTLeft,
      width: nEXTWidth,
    };
  }, [nEXTHeight, nEXTTop, nEXTLeft, nEXTWidth]);

  const continueStyle: CSSProperties = useMemo(() => {
    return {
      height: continueHeight,
      width: continueWidth,
      top: continueTop,
      left: continueLeft,
      fontSize: continueFontSize,
      fontWeight: continueFontWeight,
      fontFamily: continueFontFamily,
      color: continueColor,
    };
  }, [
    continueHeight,
    continueWidth,
    continueTop,
    continueLeft,
    continueFontSize,
    continueFontWeight,
    continueFontFamily,
    continueColor,
  ]);

  return (
    <div
      className={[styles.property1component89, className].join(" ")}
      style={property1Component89Style}
    >
      <div className={styles.component8} style={component8Style}>
        <Component23
          component6Width="100%"
          component6Height="100%"
          component6Position="absolute"
          component6Top="0%"
          component6Right="0%"
          component6Bottom="0%"
          component6Left="0%"
          rectangleDivBorder="1px solid var(--color-darkslategray)"
          rectangleDivBackgroundColor="rgba(255, 255, 255, 0.8)"
          rectangleDivBackgroundColor1="1px solid #00565c"
          rectangleDivBorder1="1px solid var(--color-darkslategray)"
          nEXTFontSize="20px"
          nEXTLetterSpacing="unset"
          nEXTLeft="7.75%"
          nEXTColor="#fff"
          nEXTFontWeight="900"
          nEXTHeight="71.7%"
          nEXTTop="13.21%"
          nEXTWidth="81.25%"
        />
      </div>
      <div className={styles.continue} style={continueStyle}>
        {continue1}
      </div>
    </div>
  );
};

export default Property1Component1;
