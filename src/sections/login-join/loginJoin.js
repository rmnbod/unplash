import React from "react";
import styles from './LoginJoin.module.css';

const loginJoin = () => (
  <section className={styles.container}>
    <a className={styles.loginBtn}  href="/login">Login</a>
    <a className={styles.joinBtn} href="/join">Join Free</a>
  </section>
);

export default loginJoin;