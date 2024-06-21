import type { NextPage } from "next";
import Property1Component8 from "../components/property1-component8";
import styles from "./component9.module.css";

const Component9: NextPage = () => {
  return (
    <div className={styles.component34}>
      <Property1Component8
        hospitalityAndTourism="Hospitality and Tourism"
        propTop="92px"
        propLeft="20px"
        propBackgroundColor="1px solid #00565c"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component8 hospitalityAndTourism="Hospitality and Tourism" />
    </div>
  );
};

export default Component9;
