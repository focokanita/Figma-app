import type { NextPage } from "next";
import Property1Default1 from "../components/property1-default1";
import Property1Default from "../components/property1-default";
import styles from "./frame-component-set.module.css";

const FrameComponentSet: NextPage = () => {
  return (
    <div className={styles.property1defaultParent}>
      <Property1Default1 />
      <Property1Default />
    </div>
  );
};

export default FrameComponentSet;
