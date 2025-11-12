
import React from 'react';

const FormInput: React.FC<{ label: string, type?: string, placeholder?: string }> = ({ label, type = "text", placeholder }) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black" 
            // Adding this click handler to ensure calendar opens on mobile Safari
            onClick={type === 'date' ? (e) => (e.target as HTMLInputElement).showPicker() : undefined}
        />
    </div>
);

const FormSelect: React.FC<{ label:string, children: React.ReactNode}> = ({ label, children }) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white text-black">
            {children}
        </select>
    </div>
);


const ReportesView: React.FC = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Reportes</h1>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                <form className="space-y-6">
                    <FormSelect label="Formato">
                        <option>CSV</option>
                        <option>Excel</option>
                        <option>PDF</option>
                    </FormSelect>
                    
                    <div className="flex space-x-4">
                        <FormInput label="Fecha desde" type="date" />
                        <FormInput label="Fecha hasta" type="date" />
                    </div>

                    <FormSelect label="Estado de activos">
                        <option>Todos</option>
                        <option>Activo</option>
                        <option>Malfuncionamiento</option>
                        <option>Mantenimiento</option>
                        <option>De baja</option>
                    </FormSelect>
                    
                    <FormSelect label="Dependencia">
                        <option>Todas</option>
                        <option>Logística</option>
                        <option>IT</option>
                        <option>Finanzas</option>
                        <option>RRHH</option>
                    </FormSelect>

                    <FormInput label="Número de empleado" placeholder="Ingrese el número de empleado" />

                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                            onClick={(e) => e.preventDefault()}
                        >
                            Generar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReportesView;