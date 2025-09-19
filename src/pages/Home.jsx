import React from 'react';
import MainSection from '../components/MainSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Sistema de Reservas</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-50">
        <MainSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Institución X - Sistema de Reservas
      </footer>
    </div>
  );
};

export default Home;
