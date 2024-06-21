import type { NextPage } from "next";
import Property1Component10 from "../components/property1-component10";
import styles from "./component11.module.css";

const Component11: NextPage = () => {
  return (
    <div className={styles.component40}>
      <Property1Component10
        propTop="69px"
        propLeft="20px"
        propBackgroundColor="1px solid #00565c"
        propBoxShadow="0px 4px 4px rgba(0, 86, 92, 0.2)"
        propFontWeight="600"
        propFontFamily="'Proxima Nova'"
      />
      <Property1Component10 />
    </div>
  );
};

export default Component11;
