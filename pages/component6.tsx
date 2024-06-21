import type { NextPage } from "next";
import Property1Component5 from "../components/property1-component5";
import styles from "./component6.module.css";

const Component6: NextPage = () => {
  return (
    <div className={styles.component25}>
      <Property1Component5
        fitness="Fitness"
        propTop="20px"
        propLeft="21px"
        propBackgroundColor="#fff"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component5 fitness="Fitness" />
    </div>
  );
};

export default Component6;
