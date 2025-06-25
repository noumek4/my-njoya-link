import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp, FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';

const ContactIcons = () => {
const contacts = [
    {
     icon: <FaWhatsapp size={40} />,
     color: 'success',
     text: 'Contactez-nous via WhatsApp',
     link: 'https://wa.me/237699202589',
    },
    {
     icon: <FaFacebook size={40} />,
     color: 'primary',
     text: 'Retrouvez-nous sur Facebook',
     link: 'https://facebook.com/stenjoyaetfils',
    },
    {
     icon: <FaEnvelope size={40} />,
     text: 'Écrivez-nous par Email',
     link: 'mailto:njoyasarl@gmail.com',
    },
    {
     icon: <FaPhone size={40} />,
     color: 'dark',
     text: 'Appelez-nous directement',
     link: 'tel:+237676889664',
    },
];

return (
    <div className="container text-center my-5">
     <h2 className="mb-4 fw-bold text-danger"> Contactez-nous</h2>
     <div className="row justify-content-center">
        {contacts.map((contact, index) => (
         <div key={index} className="col-6 col-md-3 mb-4">
            <a
             href={contact.link}
             target="_blank"
             rel="noopener noreferrer"
             style={{ textDecoration: 'none' }}
            >
             <div
              className={`d-flex justify-content-center align-items-center bg-${contact.color} text-white rounded-circle mb-2`}
              style={{ width: '80px', height: '80px', margin: '0 auto' }}
             >
              {contact.icon}
             </div>
            </a>
            <p className="text-muted">{contact.text}</p>
         </div>
        ))}
     </div>
    </div>
);
}

export default ContactIcons;
