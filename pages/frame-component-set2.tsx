import type { NextPage } from "next";
import Property1Variant from "../components/property1-variant";
import styles from "./frame-component-set2.module.css";

const FrameComponentSet2: NextPage = () => {
  return (
    <div className={styles.property1defaultParent}>
      <Property1Variant propTop="20px" />
      <Property1Variant />
    </div>
  );
};

export default FrameComponentSet2;
