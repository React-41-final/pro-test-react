import React from 'react';

const Footer = () => {
<<<<<<< HEAD
  return <h2>Footer</h2>;
=======
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <span className={styles.infoUnit}>&copy; 2020</span>
        <span className={styles.infoUnit}>All Rights Reserved</span>
        <span className={styles.infoUnit}>
          Developed with{" "}
          <span className={styles.heartWrapper}>
            <svg className={styles.heart}>
              <use href={sprite + "#paintedHeart"} />
            </svg>
          </span>
        </span>
      </div>
      <p className={styles.author}>
        by{" "}
        <NavLink to={routes.contactsPage} className={styles.navLink}>
          GoIT Students
        </NavLink>
      </p>
    </div>
  );
>>>>>>> dev
};

export default Footer;
