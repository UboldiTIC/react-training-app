
import { useState } from 'react';
import DeviceList from './DeviceList';

const DeviceReserved = () => {
  const [showDevices, setShowDevices] = useState(false);

  const [date, setDate] = useState('');

  const [filteredDevices, setFilteredDevices] = useState([]);

  const devices = [
    { name: 'Notebook Lenovo', available: true, date: '2023-10-01', time_from: '00:00', time_to: '23:59' },
    { name: 'Proyector Epson', available: false, date: '2023-10-01', time_from: '08:00', time_to: '10:00' },
    { name: 'Tablet Samsung', available: true, date: '2023-10-01', time_from: '00:00', time_to: '23:59' },
    { name: 'Notebook Lenovo', available: true, date: '2025-03-22', time_from: '00:00', time_to: '23:59' },
    { name: 'Proyector Epson', available: false, date: '2025-03-22', time_from: '08:00', time_to: '10:00' },
    { name: 'Tablet Samsung', available: true, date: '2023-10-01', time_from: '00:00', time_to: '23:59' },
    { name: 'Proyector Epson', available: false, date: '2025-09-22', time_from: '08:00', time_to: '10:00' },
    { name: 'Tablet Samsung', available: true, date: '2025-09-22', time_from: '00:00', time_to: '23:59' },
  ];

  return (
    <div className="p-6">


        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="text-black text-center border border-gray-400 bg-gray-100 px-4 py-2 rounded mb-4"
        />


      {showDevices && <DeviceList devices={filteredDevices} />}

      <button
        onClick={() => {
            if (date) {
                const result = devices.filter(device => device.date === date);
                setFilteredDevices(result);
                setShowDevices(true);
            } else {
                alert("Por favor selecciona una fecha.");
            }
        }}            
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ver dispositivos de la reserva.
      </button>
    </div>
  );
};

export default DeviceReserved;
