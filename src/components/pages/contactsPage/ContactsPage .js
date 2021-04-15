import React, { useState } from "react";
import ContactsCard from "../../contactsCard/ContactsCard";

import s from "./ContactsPage.module.scss";
import { contacts } from "./data";

// const initialState = [
//   {
//     name: "Name",
//     position: "Front-End Developer",
//     tasks: "App, Registration, Login, Results page",
//     email: "aaaa@gmail.com",
//     linkedin: "https://www.linkedin.com/in/alexkozzlov/",
//   },
// ];

const ContactsPage = () => {
  // const [contacts, setContacts] = useState(initialState);
  return (
    <div className={s.wrapper}>
      <div className={s.headContainer}>
        <h2 className={s.head}>Our team</h2>
      </div>
      <div className={s.ourTeam}>
        {contacts.map((item) => (
          <li>
            <ContactsCard {...item} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;
