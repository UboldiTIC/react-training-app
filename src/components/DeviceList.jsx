import ReservaButton from "./ReserveButton";

const DeviceList = () => {
  const devices = [
    { name: 'Notebook Lenovo', inUse: 'true' },
    { name: 'Tablet Samsung', inUse: 'false' },
    { name: 'Smartphone iPhone', inUse: 'true' },
  ];

  return (
    <ul className="mb-6">
      {devices.map((device, index) => (
        <li
          key={index}
          className={`relative p-2 rounded mb-2 flex justify-between items-center ${
            device.inUse === 'false'
              ? 'bg-red-200 text-red-800'
              : 'bg-green-200 text-green-800'
          }`}
        >
          <span>{device.name}</span>
          {device.inUse === 'true' && (
            <ReservaButton name={device.name} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DeviceList;