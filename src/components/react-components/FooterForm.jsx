import './css/footerform.css';
import emailjs from "@emailjs/browser";
import {useState} from "react";

const FooterForm = () =>
{
    const [email, setEmail] = useState("");

    const cleanForm = () =>
    {
        setEmail("");
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        emailjs
            .sendForm("service_po94d02", "template_uhfqpob", e.target, "p9sy5KN1V1jg0pnLd")
            .then((response) =>
            {
                console.log(response);
                cleanForm();
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="footer-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escribe tu correo electrónico"
                    required
                />
                <input
                    hidden
                    name="user_message"
                    defaultValue={"Suscripción a Newsletter"}
                />
                <button type="submit">Suscríbete</button>
            </form>
        </div>
    );
}

export default FooterForm;