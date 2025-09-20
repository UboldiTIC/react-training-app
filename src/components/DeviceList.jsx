
import React from 'react';

const DeviceList = ({ devices }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dispositivos de la Reserva</h2>
      <ul className="space-y-2">
        {devices.map((device, index) => (
          <li
            key={index}
            className={`p-3 rounded shadow-md ${
              device.available ? 'bg-green-300' : 'bg-red-300'
            }`}
          >
            <span className="font-medium">{device.name}</span> —{' '}
            {device.available ? 'Disponible' : 'No disponible'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
