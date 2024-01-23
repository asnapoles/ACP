import styles from "./LogInCard1.module.css";

const LogInCard = () => {
  return (
    <form className={styles.logInCard}>
      <div className={styles.shape}>
        <div className={styles.shape1} />
      </div>
      <input className={styles.ggcheckR} type="checkbox" />
      <img
        className={styles.acpFloridaChapterLogo4cLa}
        loading="eager"
        alt=""
        src="/acp-florida-chapter-logo-4c-large-11@2x.png"
      />
      <div className={styles.userImage}>
        <div className={styles.userWrapper}>
          <div className={styles.user}>
            <div className={styles.label1}>
              <div className={styles.label11}>
                <div className={styles.label12} />
              </div>
              <input
                className={styles.usuario}
                placeholder="Usuario"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonFrame}>
          <div className={styles.pass}>
            <div className={styles.label2}>
              <div className={styles.label21}>
                <div className={styles.label22} />
              </div>
              <input
                className={styles.contrasea}
                placeholder="Contraseña "
                type="text"
              />
            </div>
          </div>
          <div className={styles.userFrame}>
            <div className={styles.recordarContrasea}>
              <b
                className={styles.recordarContrasea1}
              >{`Recordar Contraseña `}</b>
            </div>
          </div>
        </div>
        <button className={styles.boton}>
          <div className={styles.botonChild} />
          <b className={styles.button}>Entrar</b>
        </button>
      </div>
    </form>
  );
};

export default LogInCard;
