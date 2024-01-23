import styles from "./Vector.module.css";

const Vector = () => {
  return (
    <div className={styles.vector}>
      <img
        className={styles.componentNodeIcon}
        loading="eager"
        alt=""
        src="/vector1.svg"
      />
    </div>
  );
};

export default Vector;
