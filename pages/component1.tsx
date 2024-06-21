import type { NextPage } from "next";
import Property1Component from "../components/property1-component";
import styles from "./component1.module.css";

const Component1: NextPage = () => {
  return (
    <div className={styles.component10}>
      <Property1Component
        scienceAndResearch="Science and Research"
        showScienceAndResearch
        propTop="84px"
        propLeft="20px"
        propBoxShadow="unset"
        propWidth="224px"
        propHeight="30px"
        propBorderRadius="unset"
        propBackgroundColor="unset"
        propRight="unset"
        propBottom="unset"
        propBackgroundColor1="1px solid #00565c"
        propBoxShadow1="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propHeight1="106.67%"
        propWidth1="100.89%"
        propTop1="-3.33%"
        propRight1="-0.45%"
        propBottom1="-3.33%"
        propLeft1="-0.45%"
        propBorder="1px solid var(--color-lightgray)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
        propWidth2="88.84%"
        propTop2="16.67%"
        propLeft2="7.14%"
        propColor="1px solid #d7d5d5"
        propFontSize="20px"
      />
      <Property1Component
        scienceAndResearch="Science and Research"
        showScienceAndResearch
      />
    </div>
  );
};

export default Component1;
