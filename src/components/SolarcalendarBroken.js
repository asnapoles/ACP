import styles from "./SolarcalendarBroken.module.css";

const SolarcalendarBroken = () => {
  return (
    <div className={styles.solarcalendarBroken}>
      <img
        className={styles.groupIcon}
        loading="eager"
        alt=""
        src="/group.svg"
      />
    </div>
  );
};

export default SolarcalendarBroken;
