import styles from "./Dash.module.css";

const Dash = () => {
  return (
    <div className={styles.dash}>
      <img
        className={styles.textBoxIcon}
        loading="eager"
        alt=""
        src="/vector.svg"
      />
      <b className={styles.name}>Dashboard</b>
    </div>
  );
};

export default Dash;
