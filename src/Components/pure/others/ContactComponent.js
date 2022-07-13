import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class";

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>Nombre: {contact.name}</h2>
      <h2>Apellido: {contact.apellido}</h2>
      <h2>Email: {contact.email}</h2>
      <h2>Estado de conexion: {contact.conected ? 'Conectado' : 'No Conectado'}</h2>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
