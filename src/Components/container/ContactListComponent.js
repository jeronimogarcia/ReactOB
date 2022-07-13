import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/others/ContactComponent";

const ContactListComponent = () => {

  const contacto = new Contact(
    "Roberto",
    "Rodriguez",
    "robertorodriguez@hotmail.com",
    true
  );

  return (
    <div>
      <div>Contactos:</div>
      <ContactComponent contact={contacto}></ContactComponent>
    </div>
  );
};

ContactListComponent.propTypes = {}

export default ContactListComponent;
