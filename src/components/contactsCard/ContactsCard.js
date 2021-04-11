import React from "react";
import s from "./ContactsCard.module.css";
import img from "../../img/chak.jpg";

const ContactsCard = () => {
  return (
    <div className={s.container}>
      <img src={img} className={s.image} alt="profile" />
      <div className={s.box}>
        <h3 className={s.name}>NAME</h3>
        <p className={s.position}>Front-End Developer</p>
        <p className={s.description}>
          Lorem Ipsum has been the standard "fish" for Latin texts since the
          early 16th century.
        </p>
      </div>
    </div>
  );
};

export default ContactsCard;
