import React, { useState } from 'react';
import { Asset, AssetUpdatePayload, ActionType } from '../types';

interface ActionFormProps {
    asset: Asset;
    onCancel: () => void;
    onSave: (assetToUpdate: Asset, newData: AssetUpdatePayload) => void;
}

const FormWrapper: React.FC<{ title: string; children: React.ReactNode; onCancel: () => void; onSave: () => void; assetName: string; }> = ({ title, children, onCancel, onSave, assetName }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-md text-gray-500 mb-6">para: <span className="font-semibold">{assetName}</span></p>
        <div className="space-y-4">
            {children}
        </div>
        <div className="flex justify-end space-x-4 mt-8">
            <button onClick={onCancel} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-all font-semibold">Cancelar</button>
            <button onClick={onSave} className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all font-semibold">Guardar</button>
        </div>
    </div>
);


const FormInput: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; placeholder?: string; }> = ({ label, value, onChange, type = 'text', placeholder }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder || label}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
            />
            {type === 'date' && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>}
        </div>
    </div>
);

const FormTextarea: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder?: string; }> = ({ label, value, onChange, placeholder }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea 
            value={value} 
            onChange={onChange} 
            rows={4} 
            placeholder={placeholder || label}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-black"
        />
    </div>
);


const AltaDeActivoForm: React.FC<ActionFormProps> = ({ asset, onCancel, onSave }) => {
    const [formData, setFormData] = useState({ fecha: '', responsable: '', departamento: '', observaciones: '' });
    
    const handleSave = () => {
        onSave(asset, {
            status: 'Active',
            newType: 'De alta',
            newHistory: {
                type: 'Alta',
                status: 'Active',
                details: `Alta de activo. Responsable: ${formData.responsable || 'N/A'}. Depto: ${formData.departamento || 'N/A'}. Obs: ${formData.observaciones || 'Ninguna'}`,
                user: 'Admin',
            }
        });
    };

    return (
        <FormWrapper title="Alta de activo" onCancel={onCancel} onSave={handleSave} assetName={asset.name}>
            <FormInput label="Fecha de alta" value={formData.fecha} onChange={e => setFormData({...formData, fecha: e.target.value})} type="date" />
            <FormInput label="Responsable" value={formData.responsable} onChange={e => setFormData({...formData, responsable: e.target.value})} />
            <FormInput label="Departamento" value={formData.departamento} onChange={e => setFormData({...formData, departamento: e.target.value})} />
            <FormTextarea label="Observaciones" value={formData.observaciones} onChange={e => setFormData({...formData, observaciones: e.target.value})} />
        </FormWrapper>
    );
};

const BajaDeActivoForm: React.FC<ActionFormProps> = ({ asset, onCancel, onSave }) => {
    const [formData, setFormData] = useState({ fecha: '', responsable: '', motivo: '' });
    
    const handleSave = () => {
         onSave(asset, {
            status: 'Malfunctioned',
            newType: 'De baja',
            newHistory: {
                type: 'Baja',
                status: 'Baja',
                details: `Motivo: ${formData.motivo || 'No especificado'}`,
                user: formData.responsable || 'Admin',
            }
        });
    };

    return (
        <FormWrapper title="Baja de activo" onCancel={onCancel} onSave={handleSave} assetName={asset.name}>
            <FormInput label="Fecha de baja" value={formData.fecha} onChange={e => setFormData({...formData, fecha: e.target.value})} type="date" />
            <FormInput label="Responsable" value={formData.responsable} onChange={e => setFormData({...formData, responsable: e.target.value})} />
            <FormTextarea label="Motivo" value={formData.motivo} onChange={e => setFormData({...formData, motivo: e.target.value})} />
        </FormWrapper>
    );
};

const MantenimientoAveriaForm: React.FC<ActionFormProps> = ({ asset, onCancel, onSave }) => {
    const [type, setType] = useState<'Preventivo' | 'Correctivo' | 'Temporal'>('Preventivo');
    const [formData, setFormData] = useState({ fecha: '', descripcion: '', tecnico: '', costo: '' });
    
    const handleSave = () => {
        let newType: "Mantenimiento preventivo" | "Mantenimiento correctivo" | "Mantenimiento temporal";
        switch (type) {
            case 'Preventivo': newType = 'Mantenimiento preventivo'; break;
            case 'Correctivo': newType = 'Mantenimiento correctivo'; break;
            case 'Temporal': newType = 'Mantenimiento temporal'; break;
        }

        onSave(asset, {
            status: 'Maintenance',
            newType: newType,
            newHistory: {
                type: `Mantenimiento ${type}`,
                status: 'Maintenance',
                details: formData.descripcion || 'Sin descripción.',
                user: formData.tecnico || 'N/A',
                cost: `CRC ${formData.costo || '0'}`
            }
        });
    };

    return (
        <FormWrapper title="Mantenimiento/Avería" onCancel={onCancel} onSave={handleSave} assetName={asset.name}>
             <div className="flex space-x-6 text-gray-700">
                <label className="flex items-center cursor-pointer"><input type="radio" name="mantenimiento" checked={type === 'Preventivo'} onChange={() => setType('Preventivo')} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300" /> Preventivo</label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="mantenimiento" checked={type === 'Correctivo'} onChange={() => setType('Correctivo')} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300" /> Correctivo</label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="mantenimiento" checked={type === 'Temporal'} onChange={() => setType('Temporal')} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300" /> Temporal</label>
            </div>
            <FormInput label="Fecha de alta" value={formData.fecha} onChange={e => setFormData({...formData, fecha: e.target.value})} type="date" />
            <FormTextarea label="Descripción del trabajo" value={formData.descripcion} onChange={e => setFormData({...formData, descripcion: e.target.value})} />
            <FormInput label="Técnico responsable" value={formData.tecnico} onChange={e => setFormData({...formData, tecnico: e.target.value})} />
            <FormInput label="Costo" value={formData.costo} onChange={e => setFormData({...formData, costo: e.target.value})} type="number" placeholder="Ingrese el costo en CRC" />
        </FormWrapper>
    );
};

interface ActionViewProps {
    actionState: { type: ActionType | null, asset: Asset | null };
    onCancel: () => void;
    onSave: (asset: Asset, data: AssetUpdatePayload) => void;
}

export const ActionView: React.FC<ActionViewProps> = ({ actionState, onCancel, onSave }) => {
    if (!actionState.type || !actionState.asset) {
        // Fallback or loading state can go here
        return <div className="w-full h-full flex items-center justify-center"><p>Cargando formulario...</p></div>;
    }

    let FormComponent;
    switch (actionState.type) {
        case 'alta':
            FormComponent = <AltaDeActivoForm asset={actionState.asset} onCancel={onCancel} onSave={onSave} />;
            break;
        case 'baja':
            FormComponent = <BajaDeActivoForm asset={actionState.asset} onCancel={onCancel} onSave={onSave} />;
            break;
        case 'mantenimiento':
            FormComponent = <MantenimientoAveriaForm asset={actionState.asset} onCancel={onCancel} onSave={onSave} />;
            break;
        default:
            return null;
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            {FormComponent}
        </div>
    );
};