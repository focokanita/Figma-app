import type { NextPage } from "next";
import Property1Component from "../components/property1-component";
import styles from "./component18.module.css";

const Component18: NextPage = () => {
  return (
    <div className={styles.component96}>
      <Property1Component
        scienceAndResearch="Science and Research"
        showScienceAndResearch={false}
        propTop="0%"
        propLeft="0%"
        propBoxShadow="unset"
        propWidth="100%"
        propHeight="100%"
        propBorderRadius="unset"
        propBackgroundColor="unset"
        propRight="0%"
        propBottom="0%"
        propBackgroundColor1="1px solid #00565c"
        propBoxShadow1="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propHeight1="106.67%"
        propWidth1="100.66%"
        propTop1="-3.33%"
        propRight1="-0.33%"
        propBottom1="-3.33%"
        propLeft1="-0.33%"
        propBorder="1px solid var(--color-lightgray)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
        propWidth2="88.85%"
        propTop2="16.67%"
        propLeft2="7.15%"
        propColor="1px solid #d7d5d5"
        propFontSize="20px"
      />
      <div className={styles.register}>Register</div>
    </div>
  );
};

export default Component18;
