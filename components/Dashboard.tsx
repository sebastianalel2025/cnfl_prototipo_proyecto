import React from 'react';
import AssetsTable from './AssetsTable';
// FIX: The ActionType was being imported from App.tsx instead of types.ts. The import has been corrected and combined.
import { Asset, ActionType } from '../types';

interface SummaryCardProps {
    title: string;
    value: string | number;
    colorClass: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, colorClass }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
        <h3 className={`text-sm font-semibold ${colorClass}`}>{title}</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
);

const ValueCard: React.FC<{ title: string; value: string; subTitle: string;}> = ({ title, value, subTitle }) => (
     <div className="bg-white p-6 rounded-lg shadow-md flex-1">
        <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
        <p className="text-xs text-gray-400 mt-1">{subTitle}</p>
    </div>
)

interface DashboardProps {
  assets: Asset[];
  onViewAsset: (asset: Asset) => void;
  onAction: (type: ActionType, asset: Asset) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ assets, onViewAsset, onAction }) => {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Activos de la empresa</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                <SummaryCard title="Total activos" value={assets.length} colorClass="text-gray-500" />
                <SummaryCard title="Funcionamiento" value={assets.filter(a => a.status === 'Active').length} colorClass="text-green-500" />
                <SummaryCard title="Malfuncionamiento" value={assets.filter(a => a.status === 'Malfunctioned').length} colorClass="text-red-500" />
                <SummaryCard title="Mantenimiento" value={assets.filter(a => a.status === 'Maintenance').length} colorClass="text-yellow-500" />
                <ValueCard title="Valor total" value="USD 279,583" subTitle="" />
                <ValueCard title="Conversión a colones" value="CRC 140,392,308" subTitle="" />
            </div>

            <AssetsTable assets={assets} onViewAsset={onViewAsset} onAction={onAction}/>
        </div>
    );
};

export default Dashboard;