import React from 'react';
import { useState } from 'react';
import ModalAlert from './ModalAlert';


const ReservaButton = ({ date, time_from, time_to, name, user }) => {

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleReserva = async () => {
    const payload = {
      date,
      time_from,
      time_to,
      name,
      user,
    };

    try {
      const response = await fetch('https://tu-api.com/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setModalMessage('Error al enviar la reserva');
        setShowModal(true);
        throw new Error('Error al enviar la reserva');
      }

      const result = await response.json();
      console.log('Reserva exitosa:', result);
      // alert('Reserva realizada con éxito');
      setModalMessage('Reserva realizada con éxito');
      setShowModal(true);
    } catch (error) {
      console.error('Error:', error);
      // alert('Hubo un problema al realizar la reserva');
      setModalMessage('Hubo un problema al realizar la reserva');
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleReserva}
        className="bg-green-800 text-white hover:bg-green-200 font-semibold py-1 px-2 rounded shadow-md transition duration-300"
      >
        Reservar
      </button>

      {showModal && (
        <ModalAlert
          message={modalMessage} // Aquí se pasa el mensaje como prop
          onClose={() => setShowModal(false)} // Función para cerrar el modal
        />
      )}
    </>
  );
};

export default ReservaButton;
