import React, { Component } from "react";
import s from "./ContactsCard.module.scss";
import img from "../../img/chak.jpg";

export default class ContactsCard extends Component {
  state = {
    isModal: false,
  };
  render() {
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
          <div className={s.socialContainer}>
            <a
              href="linkedin"
              className={`${s.link} ${s.linkedin}`}
              target="_blanck"
            >
              <span className={s.visuallyHidden}>linkedin</span>
            </a>

            <a
              href="facebook"
              className={`${s.link} ${s.facebook}`}
              target="_blanck"
            >
              <span className={s.visuallyHidden}>Facebook</span>
            </a>

            <a
              href="mailto:email"
              className={`${s.link} ${s.email}`}
              target="_blanck"
            >
              <span className={s.visuallyHidden}>Email</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
