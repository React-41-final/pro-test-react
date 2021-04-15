import React, { useState } from "react";
import ContactsCard from "../../contactsCard/ContactsCard";

import s from "./ContactsPage.module.scss";
import { contacts } from "./data";

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.headContainer}>
        <h2 className={s.head}>Our team</h2>
      </div>
      <ul className={s.ourTeam}>
        {contacts.map((item) => (
          <li className={s.ourTeam_Item}>
            <ContactsCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
