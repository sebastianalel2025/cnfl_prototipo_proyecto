
import React, { useState } from 'react';

interface NewRequestFormProps {
  onCancel: () => void;
  isUserView?: boolean;
}

const NewRequestForm: React.FC<NewRequestFormProps> = ({ onCancel, isUserView = false }) => {
    const [title, setTitle] = useState('');
    const [justification, setJustification] = useState('');
    const [type, setType] = useState('Mantenimiento/Avería');

    const handleReset = () => {
        setTitle('');
        setJustification('');
        setType('Mantenimiento/Avería');
    };

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Generar nueva solicitud</h1>
            <div className={`flex gap-8 ${isUserView ? 'items-start' : ''}`}>
                <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl flex-grow">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="justification" className="block text-sm font-medium text-gray-700">Justificación de la solicitud</label>
                            <textarea
                                id="justification"
                                rows={5}
                                value={justification}
                                onChange={(e) => setJustification(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipo</label>
                            <select
                                id="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black"
                            >
                                <option>Mantenimiento/Avería</option>
                                <option>Nuevo</option>
                                <option>Dar de baja</option>
                                <option>Cambio de propietario</option>
                            </select>
                        </div>

                        <div className="flex justify-end space-x-4 pt-4">
                            <button type="button" onClick={handleReset} className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                                Cancelar
                            </button>
                            <button type="button" onClick={handleReset} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                {isUserView && (
                    <div className="w-64 bg-white p-6 rounded-lg shadow-md flex-shrink-0">
                        <h3 className="font-bold text-gray-800 mb-4">Tipos solicitud</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span> Mantenimiento/Avería</li>
                            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span> Nuevo</li>
                            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span> Dar de baja</li>
                            <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span> Cambio de propietario</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewRequestForm;