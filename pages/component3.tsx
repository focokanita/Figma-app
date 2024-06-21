import type { NextPage } from "next";
import Property1Component2 from "../components/property1-component2";
import styles from "./component3.module.css";

const Component3: NextPage = () => {
  return (
    <div className={styles.component16}>
      <Property1Component2
        propTop="20px"
        propLeft="20px"
        propBackgroundColor="#fff"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component2 />
    </div>
  );
};

export default Component3;
