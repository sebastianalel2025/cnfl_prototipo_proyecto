

import React, { useState, useMemo } from 'react';
import { REQUESTS_DATA } from '../constants';
import { Request, RequestStatus } from '../types';
import { FilterIcon, SearchIcon } from '../constants';

const getStatusClass = (status: RequestStatus) => {
    switch (status) {
        case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
        case 'Rechazado': return 'bg-red-100 text-red-800';
        case 'Cerrado': return 'bg-gray-100 text-gray-800';
        case 'En análisis': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const ActionButton: React.FC<{label: string, icon: string}> = ({label, icon}) => (
    <button className="flex flex-col items-center text-gray-500 hover:text-orange-500 transition-colors">
        <span className="material-icons text-xl">{icon}</span>
        <span className="text-xs">{label}</span>
    </button>
);

type RequestFilterKey = 'all' | 'id' | 'title' | 'applicant' | 'status';

const SolicitudesView: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filterKey, setFilterKey] = useState<RequestFilterKey>('all');
    const itemsPerPage = 8;
    
    const filteredData = useMemo(() => {
        return REQUESTS_DATA.filter(request => {
            if (!searchTerm) return true;
            if (filterKey === 'all') {
                return Object.values(request).some(value =>
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            const value = request[filterKey as keyof Request];
            return String(value).toLowerCase().includes(searchTerm.toLowerCase());
        });
    }, [searchTerm, filterKey]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Todas las solicitudes</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Búsqueda de Solicitudes</h2>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar"
                                value={searchTerm}
                                onChange={e => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64 bg-white text-black"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <SearchIcon className="w-5 h-5"/>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FilterIcon className="w-5 h-5 text-gray-500" />
                            <select
                                value={filterKey}
                                onChange={(e) => setFilterKey(e.target.value as RequestFilterKey)}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 bg-white"
                            >
                                <option value="all">Filtros (Ninguno)</option>
                                <option value="id">ID</option>
                                <option value="title">Título</option>
                                <option value="applicant">Solicitante</option>
                                <option value="status">Estado</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                {['ID', 'Tipo', 'Título', 'Fecha', 'Solicitante', 'Estado', 'Encargado', 'Acción'].map(header => (
                                    <th key={header} scope="col" className="px-6 py-3">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map(req => (
                                <tr key={req.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{req.id}</td>
                                    <td className="px-6 py-4">{req.type}</td>
                                    <td className="px-6 py-4">{req.title}</td>
                                    <td className="px-6 py-4">{req.date}</td>
                                    <td className="px-6 py-4">{req.applicant}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(req.status)}`}>
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{req.assignee}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            {['Leer', 'Procesar', 'Rechazar', 'Cerrar'].map(action => (
                                                 <button key={action} className="text-gray-500 hover:text-orange-500 text-xs text-center">{action}</button>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-sm text-gray-500">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SolicitudesView;