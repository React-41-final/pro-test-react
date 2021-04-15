import React from "react";
import s from "./ContactsCard.module.css";
import sprite from "../../sprites/sprite.svg";

const ContactsCard = ({ name, photo, position, tasks, email, linkedin }) => {
  console.log(
    "name, photo, position, tasks, email, linkedin: ",
    name,
    photo,
    position,
    tasks,
    email,
    linkedin
  );

  return (
    <div className={s.container}>
      <img src={photo} className={s.image} alt="profile" />
      <div className={s.box}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.position}>{position}</p>
        <p className={s.description}>{tasks}</p>
      </div>
      <ul className={s.contacts}>
        <li className={s.contactsWrapper}>
          <a href={linkedin}>
            &nbsp;
            <svg className={s.contactsLogo}>
              <use href={sprite + "#linkedin-logo"} />
            </svg>{" "}
          </a>
        </li>
        <li className={s.contactsWrapper}>
          <a href={linkedin}>
            &nbsp;
            <svg className={s.contactsLogo}>
              <use href={sprite + "#facebook-logo"} />
            </svg>{" "}
          </a>
        </li>
        <li className={s.contactsWrapper}>
          <a href={email}>
            <svg className={s.contactsLogo}>
              <use href={sprite + "#email-logo"} />
            </svg>
            <span>&nbsp; {email}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactsCard;
