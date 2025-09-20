
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
      {showDevices && <DeviceList devices={devices} />}

      <button
        onClick={() => setShowDevices(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ver dispositivos de la reserva.
      </button>
    </div>
  );
};

export default DeviceReserved;
