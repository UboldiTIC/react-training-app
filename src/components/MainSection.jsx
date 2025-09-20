import React from "react";
import DeviceReserved from "./DeviceReserved";
import { DataProvider } from "../context/DataContext";

const MainSection = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <>
        <DataProvider>
          <h2 className="text-black text-2xl font-bold mb-4">Gestión de Reservas</h2>
          <DeviceReserved />
        </DataProvider>
      </>
    </section>
  );
};

export default MainSection;