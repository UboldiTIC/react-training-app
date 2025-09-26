import React from 'react';

const ReservaButton = ({ date, time_from, time_to, name, user }) => {
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
        throw new Error('Error al enviar la reserva');
      }

      const result = await response.json();
      console.log('Reserva exitosa:', result);
      alert('Reserva realizada con éxito');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al realizar la reserva');
    }
  };

  return (
    <button
      onClick={handleReserva}
      className="bg-green-800 text-white hover:bg-green-200 font-semibold py-1 px-2 rounded shadow-md transition duration-300"
    >
      Reservar
    </button> 
  );
};

export default ReservaButton;
