import styles from "./UserGrup.module.css";

const UserGrup = () => {
  return (
    <div className={styles.userGrup}>
      <div className={styles.userAvatar}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.avatarUser60}>
            <div className={styles.logoffButton} />
            <div className={styles.menuFrame}>
              <div className={styles.analyticsFrame} />
            </div>
          </div>
        </div>
      </div>
      <b className={styles.name}>Admin</b>
    </div>
  );
};

export default UserGrup;
