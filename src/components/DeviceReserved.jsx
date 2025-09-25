
import { useState } from 'react';

const DeviceList = ({ devices }) => (
  <ul className="mb-6">
    {devices.map((device, index) => (
      <li
        key={index}
        className={`p-2 rounded mb-2 ${
          device.inUse === 'false' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
        }`}
      >
        {device.name}
      </li>
    ))}
  </ul>
);

const DeviceReserved = () => {
  const [date, setDate] = useState('');
  const [filteredReserved, setFilteredReserved] = useState([]);

  const devices = [
    { name: 'Notebook Lenovo', inUse: 'true' },
    { name: 'Tablet Samsung', inUse: 'false' },
    { name: 'Smartphone iPhone', inUse: 'true' },
  ];

  const reserves = [
    { date: '2025-10-01', time_from: '08:00', time_to: '10:30', name: 'Notebook Lenovo' },
    { date: '2025-10-01', time_from: '09:00', time_to: '11:00', name: 'Tablet Samsung' },
    { date: '2022-10-02', time_from: '14:00', time_to: '18:15', name: 'Smartphone iPhone' },
  ];

  const handleFilter = () => {
    if (!date) {
      alert('Por favor selecciona una fecha.');
      return;
    }

    const reservedOnDate = reserves
      .filter((r) => r.date === date)
      .map((r) => r.name);


      if (reservedOnDate.length === 0) {
          alert('No hay reservas registradas para esa fecha.');
          setFilteredReserved([]); // Limpiar resultados anteriores si los hay
          return;
        }
        
    const filtered = devices.filter((d) => reservedOnDate.includes(d.name));
    setFilteredReserved(filtered);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Todos los dispositivos</h2>
      <DeviceList devices={devices} />

      <div className="mb-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="text-black text-center border border-gray-400 bg-gray-100 px-4 py-2 rounded"
        />
        <button
          onClick={handleFilter}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ver dispositivos reservados
        </button>
      </div>

      {filteredReserved.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-2">Reservados el {date}</h2>
          <DeviceList devices={filteredReserved} />
        </>
      )}
    </div>
  );
};

export default DeviceReserved;
