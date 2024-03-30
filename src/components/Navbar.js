// // Navbar.js
// import React, { useRef } from "react";
// import { useState } from "react";
// import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import styles from "./nav.module.css";

// function Navbar() {
//   const [isHome, setIsHome] = useState(false);
//   const navRef = useRef();

//   const showNavBar = () => {
//     const navContainer = navRef.current;
//     navContainer.classList.toggle(styles["responsive_nav"]);
//     const homeLink = navContainer.querySelector('a[href="/#"]');
//     if (homeLink) {
//       homeLink.classList.toggle("visible");
//     }
//   };

//   return (
//     <header className={styles["navbar"]}>
//       {isHome ? (
//         <Link
//           to="home"
//           className={styles["home-link"]}
//           duration={500}
//           onClick={() => {
//             setIsHome(true);
//           }}
//         >
//           Home
//         </Link>
//       ) : (
//         <NavLink
//           to="/"
//           className={styles["home-link"]}
//           duration={500}
//           onClick={() => {
//             setIsHome(true);
//           }}
//         >
//           Home
//         </NavLink>
//       )}

//       <nav ref={navRef}>
//         {isHome ? (
//           <Link to="eventsSection" duration={500}>
//             Event
//           </Link>
//         ) : (
//           <NavLink to="/Events" duration={500}>
//             Event
//           </NavLink>
//         )}

//         <NavLink
//           to="/Team"
//           duration={500}
//           onClick={() => {
//             setIsHome(false);
//           }}
//         >
//           Team
//         </NavLink>
//         {isHome ? (
//           <Link to="aboutUsSection" duration={500}>
//             About Us
//           </Link>
//         ) : (
//             <NavLink to="/About" duration={500} onClick={() => {
//               setIsHome(false)
//           }}>
//             About Us
//           </NavLink>
//         )}
//         <button
//           className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`}
//           onClick={showNavBar}
//         >
//           <FaTimes />
//         </button>
//       </nav>
//       <button className={styles["nav-btn"]} onClick={showNavBar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// export default Navbar;
// Navbar.js
import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./nav.module.css";
import logo from "./images/logi.png"; // Import your logo image

function Navbar() {
  const [isHome, setIsHome] = useState(false);
  const navRef = useRef();

  const showNavBar = () => {
    const navContainer = navRef.current;
    navContainer.classList.toggle(styles["responsive_nav"]);
    const homeLink = navContainer.querySelector('a[href="/#"]');
    if (homeLink) {
      homeLink.classList.toggle("visible");
    }
  };

  return (
    <header className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <img src={logo} alt="Logo" className={styles["logo"]} />
      </div>
      <nav ref={navRef}>
        <NavLink to="/" exact className={styles["nav-link"]} activeClassName={styles["active"]} onClick={() => setIsHome(true)}>Home</NavLink>
        <NavLink to="/about" className={styles["nav-link"]} activeClassName={styles["active"]} onClick={() => setIsHome(false)}>About Us</NavLink>
        <NavLink to="/services" className={styles["nav-link"]} activeClassName={styles["active"]} onClick={() => setIsHome(false)}>Services</NavLink>
        <NavLink to="/contact" className={styles["nav-link"]} activeClassName={styles["active"]} onClick={() => setIsHome(false)}>Contact Us</NavLink>
        <button className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`} onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className={styles["nav-btn"]} onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
