import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logoff.module.css";

const Logoff = () => {
  const navigate = useNavigate();

  const onLogoffClick = useCallback(() => {
    navigate("/-login");
  }, [navigate]);

  return (
    <button className={styles.logoff} onClick={onLogoffClick}>
      <div className={styles.nameTextWrapper}>
        <div className={styles.nameText} />
      </div>
      <img className={styles.eloffIcon} alt="" src="/eloff.svg" />
    </button>
  );
};

export default Logoff;
