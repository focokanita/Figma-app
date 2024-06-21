import type { NextPage } from "next";
import Property1Component4 from "../components/property1-component4";
import styles from "./component5.module.css";

const Component5: NextPage = () => {
  return (
    <div className={styles.component22}>
      <Property1Component4
        propTop="86px"
        propLeft="20px"
        propBackgroundColor="1px solid #00565c"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component4 />
    </div>
  );
};

export default Component5;
