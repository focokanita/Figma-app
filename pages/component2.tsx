import type { NextPage } from "next";
import Property1Component1 from "../components/property1-component1";
import styles from "./component2.module.css";

const Component2: NextPage = () => {
  return (
    <div className={styles.component13}>
      <Property1Component1
        propTop="79px"
        propOverflowY="unset"
        propLeft="20px"
        propBoxShadow="unset"
        propBackgroundColor="1px solid #00565c"
        propBoxShadow1="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component1 />
    </div>
  );
};

export default Component2;
