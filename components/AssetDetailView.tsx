import React from 'react';
import { Asset, View } from '../types';

const InfoPair: React.FC<{ label: string; value: string | React.ReactNode;}> = ({ label, value }) => (
    <div className="flex justify-between py-3 border-b border-gray-200">
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="text-sm text-gray-900 text-right">{value}</dd>
    </div>
);

const getStatusClass = (status: string) => {
    switch (status) {
        case 'Active':
        case 'Reparación':
            return 'text-green-600';
        case 'Malfunctioned':
        case 'Baja':
            return 'text-red-600';
        case 'Maintenance':
            return 'text-yellow-600';
        default:
            return 'text-gray-800';
    }
};

interface AssetDetailViewProps {
    asset: Asset;
    onNavigate: (view: View) => void;
}

const AssetDetailView: React.FC<AssetDetailViewProps> = ({ asset, onNavigate }) => {
    const assetId = `KYB${asset.id}`;

    // FIX: This function now reliably opens a new tab with the asset report and prompts the user to print or save as PDF.
    const handlePrintReport = (assetToPrint: Asset) => {
        const printAssetId = `KYB${assetToPrint.id}`;
        const printContent = `
          <html>
            <head>
              <title>Reporte de Activo - ${printAssetId}</title>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 2rem; color: #374151; }
                h1, h2, h3 { color: #111827; }
                h1 { font-size: 24px; text-align: center; margin-bottom: 2rem; }
                h2 { font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; margin-top: 2rem; }
                table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
                th, td { border: 1px solid #d1d5db; padding: 12px; text-align: left; font-size: 14px; }
                th { background-color: #f9fafb; font-weight: 600; }
                .section { margin-bottom: 2.5rem; }
                .no-history { font-style: italic; color: #6b7280; padding: 1rem; }
                .logo-container { text-align: center; margin-bottom: 1rem; }
                .logo-container img { max-height: 60px; }
              </style>
            </head>
            <body>
              <div class="logo-container">
                <img src="https://electronoticiascnfl.com/wp-content/uploads/2023/07/CNFL-Naranja-SMR-300x169.png" alt="CNFL Logo" />
              </div>
              <h1>Reporte de Activo</h1>
              <h2>${printAssetId} - ${assetToPrint.name}</h2>
    
              <div class="section">
                <h3>Información Actual</h3>
                <table>
                  <tr><th>Dependencia</th><td>${assetToPrint.dependency}</td></tr>
                  <tr><th>Estado</th><td>${assetToPrint.status}</td></tr>
                  <tr><th>Empleado</th><td>${assetToPrint.employee}</td></tr>
                  <tr><th>Valor Actual (Depreciación)</th><td>CRC ${assetToPrint.currentValue.toLocaleString('es-CR')}</td></tr>
                </table>
              </div>
    
              <div class="section">
                <h3>Información General</h3>
                <table>
                  <tr><th>Fecha de adquisición</th><td>${assetToPrint.acquisitionDate}</td></tr>
                  <tr><th>Último mantenimiento</th><td>${assetToPrint.maintenanceDate}</td></tr>
                  <tr><th>Coste original</th><td>CRC ${assetToPrint.originalCost.toLocaleString('es-CR')}</td></tr>
                </table>
              </div>
              
              <div class="section">
                <h3>Historial de Registros</h3>
                ${assetToPrint.history.length > 0 ? `
                <table>
                  <thead>
                    <tr><th>Fecha</th><th>Tipo</th><th>Estado</th><th>Detalle</th><th>Usuario</th><th>Costo</th></tr>
                  </thead>
                  <tbody>
                    ${assetToPrint.history.map(record => `
                      <tr>
                        <td>${record.date}</td>
                        <td>${record.type}</td>
                        <td>${record.status}</td>
                        <td>${record.details}</td>
                        <td>${record.user}</td>
                        <td>${record.cost || 'N/A'}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>` : `<p class="no-history">No hay registros históricos para este activo.</p>`}
              </div>
            </body>
          </html>
        `;
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(printContent);
            printWindow.document.close();
            printWindow.focus();
            // Use a timeout to ensure content is rendered before printing
            setTimeout(() => {
                printWindow.print();
            }, 500);
        } else {
            alert('Por favor, deshabilite el bloqueador de ventanas emergentes para imprimir el reporte.');
        }
    };

    return (
        <div className="space-y-8">
            <div>
                 <button onClick={() => onNavigate('dashboard')} className="text-sm text-orange-500 hover:underline mb-4">&larr; Volver al Dashboard</button>
                <h1 className="text-3xl font-bold text-gray-900">{assetId}</h1>
                <p className="text-lg text-gray-500">{asset.name}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Información actual</h2>
                        <dl>
                            <InfoPair label="Dependencia" value={asset.dependency} />
                            <InfoPair label="Estado" value={<span className={`font-semibold ${getStatusClass(asset.status)}`}>{asset.status}</span>} />
                            <InfoPair label="Empleado" value={asset.employee} />
                            <InfoPair label="Valor actual (Depreciación)" value={`CRC ${asset.currentValue.toLocaleString('es-CR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
                        </dl>
                    </div>
                     <div>
                        <h2 className="text-xl font-semibold mb-4">Información general</h2>
                        <dl>
                            <InfoPair label="Fecha de adquisición" value={asset.acquisitionDate} />
                            <InfoPair label="Último mantenimiento" value={asset.maintenanceDate} />
                            <InfoPair label="Reporte de malfuncionamineto" value={asset.malfunctionDate ?? 'N/A'} />
                            <InfoPair label="Coste original" value={`CRC ${asset.originalCost.toLocaleString('es-CR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
                        </dl>
                    </div>
                     <div className="pt-4">
                        <button onClick={() => handlePrintReport(asset)} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                           Imprimir reporte
                        </button>
                     </div>
                </div>

                <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Registros</h2>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                        {asset.history.map((record, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-semibold">{record.date}</span>
                                    <span className={`font-semibold ${getStatusClass(record.status)}`}>{record.status}</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-1">Tipo: {record.type}</p>
                                <p className="text-sm text-gray-700 bg-white p-2 rounded">{record.details}</p>
                                <div className="mt-3 text-xs space-y-1">
                                    <p><span className="font-semibold">Usuario:</span> {record.user}</p>
                                    {record.cost && <p><span className="font-semibold">Costo asociado:</span> {record.cost}</p>}
                                    {record.documents && record.documents.length > 0 && 
                                        <p>
                                            <span className="font-semibold">Documento:</span>{' '}
                                            {record.documents.map((doc, i) => (
                                                <a href="#" key={i} className="text-blue-600 hover:underline">{doc}{i < record.documents!.length - 1 ? ', ' : ''}</a>
                                            ))}
                                        </p>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetDetailView;