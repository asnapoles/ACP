import BgBlur from "../components/BgBlur";
import LogInCard from "../components/LogInCard";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <main className={styles.loginFrame}>
        <BgBlur />
        <LogInCard1 />
      </main>
    </div>
  );
};

export default Login;
