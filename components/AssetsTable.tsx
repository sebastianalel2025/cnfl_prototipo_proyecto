import React, { useState, useMemo } from 'react';
import { Asset, AssetStatus, ActionType } from '../types';
import { HistoryIcon, FilterIcon, SearchIcon } from '../constants';

const getStatusClass = (status: AssetStatus) => {
    switch (status) {
        case 'Active':
            return 'bg-green-100 text-green-800';
        case 'Malfunctioned':
            return 'bg-red-100 text-red-800';
        case 'Maintenance':
            return 'bg-yellow-100 text-yellow-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

interface AssetsTableProps {
  assets: Asset[];
  onViewAsset: (asset: Asset) => void;
  onAction: (type: ActionType, asset: Asset) => void;
}

type FilterKey = 'all' | 'id' | 'status' | 'name' | 'dependency' | 'employee';

const AssetsTable: React.FC<AssetsTableProps> = ({ assets, onViewAsset, onAction }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filterKey, setFilterKey] = useState<FilterKey>('all');
    const itemsPerPage = 8;

    const filteredData = useMemo(() => {
        return assets.filter(asset => {
            if (filterKey === 'all') {
                 return Object.values(asset).some(value =>
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            const value = asset[filterKey as keyof Asset];
            return String(value).toLowerCase().includes(searchTerm.toLowerCase());
        });
    }, [searchTerm, assets, filterKey]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Búsqueda de Activos</h2>
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
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64 bg-white"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                           <SearchIcon className="w-5 h-5"/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FilterIcon className="w-5 h-5 text-gray-500" />
                        <select 
                            value={filterKey}
                            onChange={(e) => setFilterKey(e.target.value as FilterKey)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 bg-white"
                        >
                            <option value="all">Filtros (Ninguno)</option>
                            <option value="id">ID</option>
                            <option value="name">Nombre</option>
                            <option value="dependency">Departamento</option>
                            <option value="employee">Responsable</option>
                            <option value="status">Estado</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {['ID', 'Activo', 'Dependencia', 'Adquisición', 'Mantenimiento', 'Malfunción', 'Empleado', 'Estado', 'Tipo', 'Acción'].map(header => (
                                <th key={header} scope="col" className="px-6 py-3">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map(asset => (
                            <tr key={asset.id} className="bg-white border-b hover:bg-gray-50 cursor-pointer">
                                <td className="px-6 py-4 font-medium text-gray-900" onClick={() => onViewAsset(asset)}>{asset.id}</td>
                                <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>{asset.name}</td>
                                <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>{asset.dependency}</td>
                                <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>{asset.acquisitionDate}</td>
                                <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>{asset.maintenanceDate}</td>
                                <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>{asset.malfunctionDate ?? 'N/A'}</td>
                                <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>{asset.employee}</td>
                                <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(asset.status)}`}>
                                        {asset.status}
                                    </span>
                                </td>
                                 <td className="px-6 py-4" onClick={() => onViewAsset(asset)}>{asset.type}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center space-x-3">
                                        <button title="Historial" className="text-gray-500 hover:text-orange-500" onClick={() => onViewAsset(asset)}>
                                            <HistoryIcon className="w-5 h-5"/>
                                        </button>
                                        <select
                                            className="border border-gray-300 rounded-md px-2 py-1 text-xs bg-white text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                                            value="" // This is intentionally left blank to act as a placeholder
                                            onChange={(e) => {
                                                const actionType = e.target.value as ActionType;
                                                if (actionType) {
                                                    onAction(actionType, asset);
                                                }
                                            }}
                                        >
                                            <option value="" disabled>Acciones</option>
                                            <option value="alta">De alta</option>
                                            <option value="baja">De baja</option>
                                            <option value="mantenimiento">Mantenimiento/Avería</option>
                                        </select>
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
    );
};

export default AssetsTable;