import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./i-phone1415-pro12.module.css";

const IPhone1415Pro12: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/i-phone1415-pro1");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/i-phone1415-pro9");
  }, [router]);

  return (
    <div className={styles.iphone1415Pro9}>
      <div className={styles.tempimageocd2jm1} />
      <div className={styles.skillstack}>
        <span>Skill</span>
        <span className={styles.stack}>Stack</span>
      </div>
      <div className={styles.buildYourDreamsWrapper}>
        <div className={styles.buildYourDreams}>Build Your Dreams</div>
      </div>
      <b className={styles.register}>Register</b>
      <div className={styles.loginWrapper} onClick={onFrameContainerClick}>
        <div className={styles.login}>Login</div>
      </div>
      <div
        className={styles.createAccountWrapper}
        onClick={onFrameContainerClick1}
      >
        <div className={styles.createAccount}>Create account</div>
      </div>
      <div className={styles.emailAddressOrUsernameWrapper}>
        <div className={styles.emailAddressOr}>email address or username</div>
      </div>
      <div className={styles.passwordWrapper}>
        <div className={styles.password}>password</div>
      </div>
      <div className={styles.forgottenPassword}>Forgotten Password?</div>
    </div>
  );
};

export default IPhone1415Pro12;
