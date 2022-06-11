import React from "react";
import styles from "../styles/TopComponent.module.css";

function TopComponent() {
  return (
    <>
      <header className={styles.header}>CONNECT-O</header>
      <span className={styles.span}>
        <p>Connect With People All Around The World</p>
        <img className={styles.img} src="/discover.jpg"></img>
        <br />
        <button className={styles.btn}>Download Now!</button>
      </span>
    </>
  );
}
export default TopComponent;
