import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    const providerName = event.currentTarget.textContent;
    authService //
      .login(providerName)
      .then((data) => goToMaker(data.user.uid)); //버튼 안에 있는 text를 providerName으로 할 것
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      //유저가 있으면 Maker로 이동 === 로그인 유지
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
