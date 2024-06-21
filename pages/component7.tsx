import type { NextPage } from "next";
import Property1Component6 from "../components/property1-component6";
import styles from "./component7.module.css";

const Component7: NextPage = () => {
  return (
    <div className={styles.component28}>
      <Property1Component6
        propTop="82px"
        propLeft="20px"
        propBackgroundColor="1px solid #00565c"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component6 />
    </div>
  );
};

export default Component7;
