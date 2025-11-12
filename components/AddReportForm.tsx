

import React, { useState, useRef } from 'react';

interface AddReportFormProps {
  onCancel: () => void;
}

const AddReportForm: React.FC<AddReportFormProps> = ({ onCancel }) => {
    // State for file names
    const [imageName, setImageName] = useState<string | null>(null);
    const [fileNames, setFileNames] = useState<string | null>(null);

    // State for other form fields
    const [reportName, setReportName] = useState('');
    const [status, setStatus] = useState('Mantenimiento');
    const [assetNumber, setAssetNumber] = useState('');
    const [description, setDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [cost, setCost] = useState('');
    
    // Refs to reset file inputs
    const imageInputRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleReset = () => {
        setImageName(null);
        setFileNames(null);
        setReportName('');
        setStatus('Mantenimiento');
        setAssetNumber('');
        setDescription('');
        setEventDate('');
        setCost('');
        if (imageInputRef.current) {
            imageInputRef.current.value = "";
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImageName(event.target.files[0].name);
        } else {
            setImageName(null);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const names = Array.from(event.target.files).map((f: File) => f.name).join(', ');
            setFileNames(names);
        } else {
            setFileNames(null);
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Agregar un reporte de mantenimiento o avería</h1>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex flex-col justify-center items-center h-full">
                                <label htmlFor="image-upload" className="cursor-pointer">
                                    <p className="text-sm text-gray-500">Drag image here</p>
                                    <p className="text-xs text-gray-400">or</p>
                                    <span className="text-sm text-orange-500 hover:underline">Browse image</span>
                                </label>
                                <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} ref={imageInputRef}/>
                            </div>
                            {imageName && <p className="text-xs text-gray-500 mt-2 text-center truncate" title={imageName}>Archivo: {imageName}</p>}
                        </div>
                         <div>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center flex flex-col justify-center items-center h-full">
                                 <label htmlFor="file-upload" className="cursor-pointer">
                                    <p className="text-sm text-gray-500">Drag and drop or, <span className="text-sm text-orange-500 hover:underline">Browse your files</span></p>
                                </label>
                                <input id="file-upload" type="file" className="hidden" multiple onChange={handleFileChange} ref={fileInputRef} />
                            </div>
                            {fileNames && <p className="text-xs text-gray-500 mt-2 text-center truncate" title={fileNames}>Archivo(s): {fileNames}</p>}
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="reportName" className="block text-sm font-medium text-gray-700">Nombre del reporte</label>
                        <input
                            type="text"
                            id="reportName"
                            value={reportName}
                            onChange={(e) => setReportName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado</label>
                            <select
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black"
                            >
                                <option>Mantenimiento</option>
                                <option>Malfuncionamiento</option>
                                <option>Activo</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="assetNumber" className="block text-sm font-medium text-gray-700">Número de activo</label>
                            <input
                                type="text"
                                id="assetNumber"
                                value={assetNumber}
                                onChange={(e) => setAssetNumber(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción o detalles del reporte</label>
                        <textarea
                            id="description"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Fecha del evento</label>
                            <input
                                type="date"
                                id="eventDate"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Costo asociado en CRC</label>
                            <input
                                type="number"
                                id="cost"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={handleReset} className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                            Cancelar
                        </button>
                        <button type="button" onClick={handleReset} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Agregar reporte
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReportForm;