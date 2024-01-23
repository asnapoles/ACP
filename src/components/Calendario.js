import styles from "./Calendario.module.css";

const Calendario = () => {
  return (
    <footer className={styles.calendario}>
      <img
        className={styles.solarcalendarBrokenIcon}
        loading="eager"
        alt=""
        src="/solarcalendarbroken1.svg"
      />
      <div className={styles.name}>
        <b className={styles.name1}>Calendario</b>
      </div>
    </footer>
  );
};

export default Calendario;
