import styles from "./Donaciones.module.css";

const Donaciones = () => {
  return (
    <div className={styles.donaciones}>
      <img
        className={styles.donationsLabelIcon}
        loading="eager"
        alt=""
        src="/vector-1.svg"
      />
      <b className={styles.name}>Donaciones</b>
    </div>
  );
};

export default Donaciones;
