import React, { useRef, useState } from "react";
import styles from "./landing.module.css";
import hero from "./images/hero_img.png";
import { FaArrowUp } from "react-icons/fa6";
function Landing() {
  return (
    <div className={styles["landing"]}>
      <h1 className={styles["head"]}>Reach the right<br/>way to people</h1>
      <img src={hero} alt="hero" className={styles["hero"]} />
      <p className={styles["sub-head"]}>Our expert team with<br/>advanced data driven<br/>approaches create the impact<br/> you need. Want to bring<br/>change? Do it the right way.</p>
      {/* <div className={styles["circle"]}> */}
        {/* <div className="logo"> */}
            {/* <FaArrowUp /> */}
        {/* </div> */}
    <div className={styles["circle"]}>
        <FaArrowUp className="logo" />
        <div className="text">
            <p>LET'S GET STARTED.</p>
        </div>
    </div>
    <div className={styles["about"]}>
      <h2 className={styles["about-head"]}>About Us</h2>
      <p className={styles["about-text"]}>Are you seeking effective strategies to connect with your target base and serve your constituents better? Want to delve into the content that resonates with your audience or utilize the latest technology for voter outreach? Looking for experts to elevate your political campaign? Your search ends here!<br/>
Welcome to People Pulse, your strategic partner in political consulting. Specializing in Political Communication, Constituency Profiling, Campaign Management, Digital Media Management, and Content Placement Strategy, we are dedicated to optimizing your political actions. Our expertise extends to Polling and Political Data Analysis. Rooted in India, we have successfully collaborated with companies, causes, campaigns, candidates, and parties in India and across Asia. Join us to transform your political objectives into reality.</p>
    </div>
    <div className={styles["services"]}>
    <h2 className={styles["services-head"]}>services</h2>
    <h2 className={styles["services-head"]}>services</h2>
    <h2 className={styles["services-head"]}>services</h2>
    </div>
    </div>
  );
}
export default Landing;