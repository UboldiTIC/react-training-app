import React from "react";
import DeviceReserved from "./DeviceReserved";

const MainSection = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          {/* <h2 className="text-xl font-semibold mb-4">Bienvenido/a</h2>
          <p className="text-gray-700">
            Esta es la página principal del sistema de reservas de dispositivos. Desde aquí podrás:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Ver los dispositivos disponibles</li>
            <li>Realizar una nueva reserva</li>
            <li>Consultar tus reservas activas</li>
          </ul> */}
            <DeviceReserved />  
    </section>
  );
};

export default MainSection;