import type { NextPage } from "next";
import StateActive from "../components/state-active";
import styles from "./frame-component-set3.module.css";

const FrameComponentSet3: NextPage = () => {
  return (
    <div className={styles.statedefaultParent}>
      <StateActive propTop="20px" />
      <StateActive />
    </div>
  );
};

export default FrameComponentSet3;
