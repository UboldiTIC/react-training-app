
import React, { useState } from 'react';
import DeviceList from './DeviceList';

const DeviceReserved = () => {
  const [showDevices, setShowDevices] = useState(false);

  const devices = [
    { name: 'Notebook Lenovo', available: true },
    { name: 'Proyector Epson', available: false },
    { name: 'Tablet Samsung', available: true },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Página Principal</h1>
      <button
        onClick={() => setShowDevices(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ver dispositivos de la reserva
      </button>

      {showDevices && <DeviceList devices={devices} />}
    </div>
  );
};

export default DeviceReserved;
