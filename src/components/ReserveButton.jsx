import { useState } from 'react';
import ModalAlert from './ModalAlert';

const ReservaButton = ({ name }) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [formData, setFormData] = useState({
    date: '',
    time_from: '',
    time_to: '',
    user: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      name, // viene como prop desde DeviceList
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
        return;
      }

      const result = await response.json();
      console.log('Reserva exitosa:', result);
      setModalMessage('Reserva realizada con éxito');
      setShowModal(true);
      setShowForm(false); // cerrar formulario
    } catch (error) {
      console.error('Error:', error);
      setModalMessage('Hubo un problema al realizar la reserva');
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-800 text-white hover:bg-green-200 font-semibold py-1 px-2 rounded shadow-md transition duration-300"
      >
        Reservar
      </button>

      {/* Modal del formulario */}
      {showForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm bg-white/30">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
            <div className="bg-blue-500 text-white p-4 rounded-t-lg mb-4">
              <h2 className="text-lg font-semibold">Reservar: {name}</h2>
            </div>

            <div className="space-y-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Fecha"
              />
              <input
                type="time"
                name="time_from"
                value={formData.time_from}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Hora desde"
              />
              <input
                type="time"
                name="time_to"
                value={formData.time_to}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Hora hasta"
              />
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Usuario"
              />
            </div>

            <div className="flex justify-end mt-6 space-x-2">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de alerta */}
      {showModal && (
        <ModalAlert
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ReservaButton;
