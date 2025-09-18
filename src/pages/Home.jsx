import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Sistema de Reservas</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-50">
        <section className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Bienvenido/a</h2>
          <p className="text-gray-700">
            Esta es la página principal del sistema de reservas de dispositivos. Desde aquí podrás:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Ver los dispositivos disponibles</li>
            <li>Realizar una nueva reserva</li>
            <li>Consultar tus reservas activas</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Institución X - Sistema de Reservas
      </footer>
    </div>
  );
};

export default Home;
