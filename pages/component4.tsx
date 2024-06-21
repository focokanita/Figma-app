import type { NextPage } from "next";
import Property1Component3 from "../components/property1-component3";
import styles from "./component4.module.css";

const Component4: NextPage = () => {
  return (
    <div className={styles.component19}>
      <Property1Component3
        informationTechnology="Information Technology "
        propTop="97px"
        propLeft="21px"
        propBoxShadow="unset"
        propBackgroundColor="1px solid #00565c"
        propBoxShadow1="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component3 informationTechnology="Information Technology " />
    </div>
  );
};

export default Component4;
