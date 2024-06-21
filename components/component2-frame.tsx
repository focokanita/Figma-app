import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component2-frame.module.css";

export type Component2FrameType = {
  className?: string;
  showRectangleDiv?: boolean;
  showShowWhatYou?: boolean;
  showEllipseIcon?: boolean;

  /** Style props */
  component2Frame9Position?: CSSProperties["position"];
  component2Frame9Top?: CSSProperties["top"];
  component2Frame9Left?: CSSProperties["left"];
  component2Frame9Width?: CSSProperties["width"];
  component2Frame9Height?: CSSProperties["height"];
  component2Frame9Right?: CSSProperties["right"];
  component2Frame9Bottom?: CSSProperties["bottom"];
  rectangleDivBorder?: CSSProperties["border"];
  showWhatYouFontWeight?: CSSProperties["fontWeight"];
};

const Component2Frame: NextPage<Component2FrameType> = ({
  className = "",
  showRectangleDiv,
  showShowWhatYou,
  showEllipseIcon,
  component2Frame9Position,
  component2Frame9Top,
  component2Frame9Left,
  component2Frame9Width,
  component2Frame9Height,
  component2Frame9Right,
  component2Frame9Bottom,
  rectangleDivBorder,
  showWhatYouFontWeight,
}) => {
  const component2Frame9Style: CSSProperties = useMemo(() => {
    return {
      position: component2Frame9Position,
      top: component2Frame9Top,
      left: component2Frame9Left,
      width: component2Frame9Width,
      height: component2Frame9Height,
      right: component2Frame9Right,
      bottom: component2Frame9Bottom,
    };
  }, [
    component2Frame9Position,
    component2Frame9Top,
    component2Frame9Left,
    component2Frame9Width,
    component2Frame9Height,
    component2Frame9Right,
    component2Frame9Bottom,
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
      className={[styles.component2frame9, className].join(" ")}
      style={component2Frame9Style}
    >
      {showRectangleDiv && (
        <div
          className={styles.component2frame9Child}
          style={rectangleDivStyle}
        />
      )}
      <img
        className={styles.moreHorizontalIcon}
        alt=""
        src="/morehorizontal.svg"
      />
      {showShowWhatYou && (
        <div className={styles.showWhatYou} style={showWhatYouStyle}>
          Show what you got
        </div>
      )}
      {showEllipseIcon && (
        <img
          className={styles.component2frame9Item}
          alt=""
          src="/ellipse-1@2x.png"
        />
      )}
    </div>
  );
};

export default Component2Frame;
