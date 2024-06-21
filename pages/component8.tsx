import type { NextPage } from "next";
import Property1Component7 from "../components/property1-component7";
import styles from "./component8.module.css";

const Component8: NextPage = () => {
  return (
    <div className={styles.component31}>
      <Property1Component7
        transportationAndLogistic="Transportation and Logistics"
        propTop="85px"
        propLeft="21px"
        propBoxShadow="unset"
        propBackgroundColor="1px solid #00565c"
        propBoxShadow1="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component7 transportationAndLogistic="Transportation and Logistics" />
    </div>
  );
};

export default Component8;
