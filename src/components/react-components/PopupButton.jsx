import './css/popupbutton.css';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '80%',
        height: '700px',
        margin: 'auto',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: '999'
    },
};

const PopupButton = () =>
{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    // URL de tu evento de Calendly
    const calendlyURL = 'https://calendly.com/d/4bv-22g-bsf/cuentanos-tu-proyecto?month=2023-09';

    return (
        <div>
            <button className="popup-button" onClick={openModal}>Reserva tu Cita!</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Calendly Popup"
                ariaHideApp={false}
                style={customStyles}
            >
                <div>
                    <button className="x-button" onClick={closeModal}>X</button>
                    <iframe
                        title="Calendly Popup"
                        src={calendlyURL}
                        width="100%"
                        height="660"
                        frameBorder="0"
                    ></iframe>
                </div>
            </Modal>
        </div>
    );
};

export default PopupButton;
