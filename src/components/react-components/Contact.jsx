import './css/contact.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () =>
{
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedOption, setSelectedOption] = useState([]);
    const [message, setMessage] = useState("");

    const options = [
        {id: "Ciberseguridad", label: "Ciberseguridad"},
        {id: "Desarrollo de Software", label: "Desarrollo de Software"},
        {id: "Servicios de IT", label: "Servicios de IT"},
    ];

    const cleanForm = () =>
    {
        setName("");
        setLastname("");
        setEmail("");
        setPhone("");
        setSelectedOption([]);
        setMessage("");
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        emailjs
            .sendForm("service_po94d02", "template_uhfqpob", e.target, "p9sy5KN1V1jg0pnLd")
            .then((response) => {
                console.log(response);
                cleanForm();
            })
            .catch((error) => console.log(error));
    }

    const handleNameChange = (e) =>
    {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, "");
        setName(onlyLetters);
    };

    const handleLastNameChange = (e) =>
    {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, "");
        setLastname(onlyLetters);
    };

    const handlePhoneChange = (e) =>
    {
        const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
        setPhone(onlyNumbers);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-top">
                <h3>Ponte en contacto con nosotros</h3>
                <h1>Y descubre el trabajo que buscas hecho a tu medida</h1>
            </div>
            <div className="contact-bottom">
                <div className="contact-left">
                    <div className="contact-left-top">
                        <h2>Información de Contacto</h2>
                        <h4>Déjanos tu info, y nos te contáctaremos lo más pronto posible</h4>
                    </div>
                    <div className="contact-left-middle">
                        <div>
                            +57 3157346566
                        </div>
                        <div>
                            info@macondosoftwares.com
                        </div>
                        <div>
                            Carrera 3 #13 -37, Chia, Cundinamarca.
                        </div>
                    </div>
                    <div className="contact-left-social">
                        <div className="app">
                            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                        </div>
                        <div className="app">
                            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                <path d="M16.5 7.5l0 .01"></path>
                            </svg>
                        </div>
                        <div className="app">
                            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <div className="input-top">
                            <div>
                                <label>Nombre: </label>
                                <input
                                    type="text"
                                    placeholder="Juan..."
                                    name="user_name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Apellido: </label>
                                <input
                                    type="text"
                                    placeholder="Perez..."
                                    name="user_lastname"
                                    value={lastname}
                                    onChange={handleLastNameChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-top">
                            <div>
                                <label>Correo: </label>
                                <input
                                    type="email"
                                    placeholder="ejemplo@ejemplo"
                                    name="user_email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Teléfono: </label>
                                <input
                                    type="tel"
                                    placeholder="+573124567890"
                                    name="user_phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </div>
                        </div>
                        <div className="input-option">
                            <label className="input-option-top">¿Cómo te puedo ayudar?</label>
                            <div className="input-option-container">
                                {options.map((option) => (
                                    <label key={option.id} className="input-option-selection">
                                        <input
                                            type="radio"
                                            name="user_option"
                                            value={option.id}
                                            checked={selectedOption === option.id}
                                            onChange={() => setSelectedOption(option.id)}
                                        />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="input-message">
                            <label>Mensaje: </label>
                            <textarea
                                className="input-message-text"
                                placeholder="Escribe tu mensaje..."
                                name="user_message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-submit">
                            <button type="submit">Enviar mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;