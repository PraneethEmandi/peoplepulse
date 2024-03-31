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
    <div className="contents">
      <div className="card1">
        <h3>Political Strategy</h3>
        <p>Our team models voting patterns, tracks political leaders, and meticulously analyzes media trends for clients' insights.</p>
      </div>
      <div className="card1">
        <h3>Data Analytics</h3>
        <p>Our advanced tech integrated solutions and data driven approaches will allow us to predict and act with atmost precision.</p>
      </div>
      <div className="card1">
        <h3>Communications</h3>
        <p>Our team creates impactful content, amplifying client messages across print and digital media, and provides strategic insights.</p>
      </div>
      <div className="card">
        <h3>Campaigns & Operations</h3>
        <p>Our team strategizes campaigns, focusing on brand governance and overseeing on-ground initiatives with assessment.</p>
      </div>
      <div className="card">
        <h3>Strategic Research</h3>
        <p>Our team analyzes government performance, identifies policy issues, and recommends diverse methods.</p>
      </div>
      <div className="card">
        <h3>Performance Marketing</h3>
        <p>Our team excels in marketing strategy, refining channels for growth, outreach, and sustainable expansion.</p>
      </div>
      <div className="card">
        <h3>Data Analytics</h3>
        <p>Our team predicts voting patterns, monitors leaders, and analyzes media trends, providing valuable client insights.</p>
      </div>
    </div>
    </div>
  );
}
export default Landing;