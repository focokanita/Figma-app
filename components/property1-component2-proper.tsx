import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Component2Frame from "./component2-frame";
import styles from "./property1-component2-proper.module.css";

export type Property1Component2ProperType = {
  className?: string;
  showRectangleDiv?: boolean;
  showShowWhatYou?: boolean;
  showEllipseIcon?: boolean;

  /** Style props */
  property1Component2ProperPosition?: CSSProperties["position"];
  property1Component2ProperTop?: CSSProperties["top"];
  property1Component2ProperLeft?: CSSProperties["left"];
  property1Component2ProperOverflow?: CSSProperties["overflow"];
  property1Component2ProperWidth?: CSSProperties["width"];
  property1Component2ProperHeight?: CSSProperties["height"];
  property1Component2ProperRight?: CSSProperties["right"];
  property1Component2ProperBottom?: CSSProperties["bottom"];
  rectangleDivBorder?: CSSProperties["border"];
  showWhatYouFontWeight?: CSSProperties["fontWeight"];
};

const Property1Component2Proper: NextPage<Property1Component2ProperType> = ({
  className = "",
  showRectangleDiv,
  showShowWhatYou,
  showEllipseIcon,
  property1Component2ProperPosition,
  property1Component2ProperTop,
  property1Component2ProperLeft,
  property1Component2ProperOverflow,
  property1Component2ProperWidth,
  property1Component2ProperHeight,
  property1Component2ProperRight,
  property1Component2ProperBottom,
  rectangleDivBorder,
  showWhatYouFontWeight,
}) => {
  const property1Component2ProperStyle: CSSProperties = useMemo(() => {
    return {
      position: property1Component2ProperPosition,
      top: property1Component2ProperTop,
      left: property1Component2ProperLeft,
      overflow: property1Component2ProperOverflow,
      width: property1Component2ProperWidth,
      height: property1Component2ProperHeight,
      right: property1Component2ProperRight,
      bottom: property1Component2ProperBottom,
    };
  }, [
    property1Component2ProperPosition,
    property1Component2ProperTop,
    property1Component2ProperLeft,
    property1Component2ProperOverflow,
    property1Component2ProperWidth,
    property1Component2ProperHeight,
    property1Component2ProperRight,
    property1Component2ProperBottom,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  const showWhatYouStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: showWhatYouFontWeight,
    };
  }, [showWhatYouFontWeight]);

  return (
    <div
      className={[styles.property1component2Proper, className].join(" ")}
      style={property1Component2ProperStyle}
    >
      <Component2Frame
        showRectangleDiv
        showShowWhatYou
        showEllipseIcon
        component2Frame9Position="absolute"
        component2Frame9Top="0%"
        component2Frame9Left="0%"
        component2Frame9Width="100%"
        component2Frame9Height="100%"
        component2Frame9Right="0%"
        component2Frame9Bottom="0%"
        rectangleDivBorder="1px solid var(--color-black)"
        showWhatYouFontWeight="unset"
      />
    </div>
  );
};

export default Property1Component2Proper;
