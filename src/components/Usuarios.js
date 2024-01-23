import styles from "./Usuarios.module.css";

const Usuarios = () => {
  return (
    <footer className={styles.usuarios}>
      <img
        className={styles.ussersIcon}
        loading="eager"
        alt=""
        src="/ussers.svg"
      />
      <b className={styles.name}>Usuarios</b>
    </footer>
  );
};

export default Usuarios;
