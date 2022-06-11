import React from "react";

import styles from "../styles/contactus.module.css";

function ContactComponent() {
  let height = {
    height: "100px",
  };
  return (
    <>
      <div className={styles.card}>
        <form>
          <header>CONTACT US</header>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
              id="email"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className={styles.input}
              id="sub"
            />
          </div>
          <div>
            <textarea
              className={styles.input}
              placeholder="Your Message"
              id="msg"
              style={height}
            ></textarea>
          </div>
          <div>
            <button className={styles.btn}>SEND</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactComponent;
