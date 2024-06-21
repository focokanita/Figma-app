import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import Component2Frame from "../components/component2-frame";
import Property1Component2Proper from "../components/property1-component2-proper";
import styles from "./i-phone1415-pro6.module.css";

const IPhone1415Pro6: NextPage = () => {
  return (
    <div className={styles.iphone1415Pro17}>
      <div className={styles.frameParent}>
        <div className={styles.skillstackParent}>
          <div className={styles.skillstack}>
            <span>Skill</span>
            <span className={styles.stack}>Stack</span>
          </div>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <img className={styles.sendIcon} alt="" src="/send.svg" />
          <img className={styles.plusCircleIcon} alt="" src="/pluscircle.svg" />
        </div>
        <FrameComponent1 />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild1} />
        </div>
        <Component2Frame
          showRectangleDiv
          showShowWhatYou
          showEllipseIcon
          component2Frame9Position="absolute"
          component2Frame9Top="48px"
          component2Frame9Left="2px"
          component2Frame9Width="393px"
          component2Frame9Height="53px"
          component2Frame9Right="unset"
          component2Frame9Bottom="unset"
          rectangleDivBorder="1px solid var(--color-black)"
          showWhatYouFontWeight="unset"
        />
        <Property1Component2Proper
          showRectangleDiv
          showShowWhatYou
          showEllipseIcon
          property1Component2ProperPosition="absolute"
          property1Component2ProperTop="46px"
          property1Component2ProperLeft="0px"
          property1Component2ProperOverflow="unset"
          property1Component2ProperWidth="393px"
          property1Component2ProperHeight="53px"
          property1Component2ProperRight="unset"
          property1Component2ProperBottom="unset"
          rectangleDivBorder="1px solid var(--color-black)"
          showWhatYouFontWeight="unset"
        />
        <Property1Component2Proper
          showRectangleDiv
          showShowWhatYou
          showEllipseIcon
          property1Component2ProperPosition="absolute"
          property1Component2ProperTop="48px"
          property1Component2ProperLeft="3px"
          property1Component2ProperOverflow="unset"
          property1Component2ProperWidth="393px"
          property1Component2ProperHeight="53px"
          property1Component2ProperRight="unset"
          property1Component2ProperBottom="unset"
          rectangleDivBorder="1px solid var(--color-black)"
          showWhatYouFontWeight="unset"
        />
        <Property1Component2Proper
          showRectangleDiv
          showShowWhatYou
          showEllipseIcon={false}
          property1Component2ProperPosition="absolute"
          property1Component2ProperTop="47px"
          property1Component2ProperLeft="3px"
          property1Component2ProperOverflow="unset"
          property1Component2ProperWidth="393px"
          property1Component2ProperHeight="53px"
          property1Component2ProperRight="unset"
          property1Component2ProperBottom="unset"
          rectangleDivBorder="1px solid var(--color-lightgray)"
          showWhatYouFontWeight="800"
        />
        <img
          className={styles.component102Icon}
          alt=""
          src="/component-102.svg"
        />
        <div className={styles.rectangleContainer}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-24@2x.png"
          />
          <div className={styles.frameChild7} />
          <div className={styles.frameChild8} />
          <div className={styles.frameChild9} />
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" />
        <img className={styles.heartIcon} alt="" src="/heart.svg" />
        <img
          className={styles.component98globeIcon}
          alt=""
          src="/component-98globe.svg"
        />
        <img className={styles.homeIcon} alt="" src="/home.svg" />
        <div className={styles.homeBar}>
          <div className={styles.rectangle} />
        </div>
      </div>
      <div className={styles.iphone1415Pro17Child} />
      <div className={styles.vectorGroup}>
        <img className={styles.vectorIcon} alt="" />
        <img className={styles.heartIcon1} alt="" src="/heart2.svg" />
        <img
          className={styles.component98globeIcon}
          alt=""
          src="/component-98globe.svg"
        />
        <img className={styles.homeIcon} alt="" src="/home.svg" />
        <div className={styles.homeBar1} />
      </div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.rectangle1} />
      </div>
      <div className={styles.statusBar}>
        <div className={styles.time}>
          <img className={styles.timeIcon} alt="" src="/time.svg" />
        </div>
        <div className={styles.time}>
          <div className={styles.dynamicIsland} />
        </div>
        <div className={styles.icons}>
          <img className={styles.receptionIcon} alt="" src="/reception.svg" />
          <img className={styles.receptionIcon} alt="" src="/wifi.svg" />
          <img className={styles.batteryIcon} alt="" src="/battery.svg" />
        </div>
      </div>
    </div>
  );
};

export default IPhone1415Pro6;
