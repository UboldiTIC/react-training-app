import React from 'react';

const ModalAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md">
        {/* Header del modal */}
        <div className="bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Error</h2>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-4 text-gray-800">
          <p>{message}</p>
        </div>

        {/* Footer con botón de cerrar */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
