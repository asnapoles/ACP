import ACPFloridaChapterLogo4cLa from "../components/ACPFloridaChapterLogo4cLa";
import UserGrup from "../components/UserGrup";
import Logoff from "../components/Logoff";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.separador}>
        <div className={styles.separador1} />
      </div>
      <ACPFloridaChapterLogo4cLa />
      <main className={styles.userGroupFrameWrapper}>
        <section className={styles.userGroupFrame}>
          <UserGrup />
          <Logoff />
          <div className={styles.menu}>
            <div className={styles.frameShape}>
              <div className={styles.analiticas}>
                <b className={styles.analiticas1}>Analiticas</b>
              </div>
            </div>
            <div className={styles.menuInstance}>
              <div className={styles.subframe}>
                <div className={styles.menu1}>
                  <div className={styles.sliderComponent}>
                    <button className={styles.dashLine}>
                      <div className={styles.slider}>
                        <div className={styles.slider1} />
                      </div>
                      <div className={styles.dash}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector.svg"
                        />
                        <b className={styles.name}>Dashboard</b>
                      </div>
                    </button>
                    <div className={styles.usersFrame}>
                      <div className={styles.calendario}>
                        <img
                          className={styles.solarcalendarBrokenIcon}
                          loading="eager"
                          alt=""
                          src="/solarcalendarbroken.svg"
                        />
                        <div className={styles.name1}>
                          <b className={styles.name2}>Calendario</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.shapeContainer}>
                    <div className={styles.usuarios}>
                      <img
                        className={styles.ussersIcon}
                        loading="eager"
                        alt=""
                        src="/ussers.svg"
                      />
                      <b className={styles.name3}>Usuarios</b>
                    </div>
                  </div>
                  <div className={styles.donationFrame}>
                    <div className={styles.donaciones}>
                      <img
                        className={styles.usersAreaIcon}
                        loading="eager"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <b className={styles.name4}>Donaciones</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shapes}>
                <div className={styles.shapeBox}>
                  <textarea className={styles.shape3} rows={19} cols={28} />
                  <textarea className={styles.shape2} rows={19} cols={28} />
                </div>
                <div className={styles.shape1} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
