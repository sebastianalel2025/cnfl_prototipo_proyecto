import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SolicitudesView from './components/SolicitudesView';
import ReportesView from './components/ReportesView';
import AssetDetailView from './components/AssetDetailView';
import NewRequestForm from './components/NewRequestForm';
import AddReportForm from './components/AddReportForm';
import { Asset, AssetHistory, AssetUpdatePayload, View, ActionType, UserRole } from './types';
import { ASSETS_DATA } from './constants';
import Login from './components/Login';
import UserView from './components/UserView';
import { ActionView } from './components/ActionModals';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [assets, setAssets] = useState<Asset[]>(ASSETS_DATA);
  
  // Admin-specific state
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(assets[0]);
  const [actionState, setActionState] = useState<{ type: ActionType | null; asset: Asset | null }>({ type: null, asset: null });


  const handleLogin = (role: 'admin' | 'user') => {
    setUserRole(role);
    if (role === 'admin') {
      setCurrentView('dashboard');
    }
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  const handleNavigate = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  const handleViewAsset = useCallback((asset: Asset) => {
    const latestAssetVersion = assets.find(a => a.id === asset.id) || asset;
    setSelectedAsset(latestAssetVersion);
    setCurrentView('assetDetail');
  }, [assets]);

  const handleTriggerAction = (type: ActionType, asset: Asset) => {
    setActionState({ type, asset });
    setCurrentView('actionForm');
  };

  const handleCancelAction = () => {
    setActionState({ type: null, asset: null });
    setCurrentView('dashboard');
  };

  const handleAssetUpdate = (assetToUpdate: Asset, newData: AssetUpdatePayload) => {
    const updatedAssets = assets.map(asset => {
      if (asset.id === assetToUpdate.id) {
        const newHistoryEntry: AssetHistory = {
          ...newData.newHistory,
          date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric'}),
        };
        
        const updatedAsset: Asset = {
          ...asset,
          status: newData.status || asset.status,
          type: newData.newType,
          history: [newHistoryEntry, ...asset.history],
        };
        return updatedAsset;
      }
      return asset;
    });
    setAssets(updatedAssets);
    
    if(selectedAsset && selectedAsset.id === assetToUpdate.id) {
        const updatedSelectedAsset = updatedAssets.find(a => a.id === selectedAsset.id);
        if(updatedSelectedAsset) {
            setSelectedAsset(updatedSelectedAsset);
        }
    }
    handleCancelAction(); // Return to dashboard after saving
  };

  if (!userRole) {
    return <Login onLogin={handleLogin} />;
  }

  if (userRole === 'user') {
    return <UserView onLogout={handleLogout} />;
  }
  
  const getAdminUserName = () => {
     switch(currentView) {
       case 'newRequest':
       case 'addReport':
         return 'Steven';
       default:
         return 'Sebastián';
     }
  }

  const renderAdminContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard 
                    assets={assets} 
                    onViewAsset={handleViewAsset}
                    onAction={handleTriggerAction}
                />;
      case 'solicitudes':
        return <SolicitudesView />;
      case 'reportes':
        return <ReportesView />;
      case 'assetDetail':
        return selectedAsset ? <AssetDetailView asset={selectedAsset} onNavigate={handleNavigate} /> : <Dashboard assets={assets} onViewAsset={handleViewAsset} onAction={handleTriggerAction}/>;
      case 'newRequest':
        return <NewRequestForm onCancel={() => handleNavigate('solicitudes')} />;
      case 'addReport':
        return <AddReportForm onCancel={() => handleNavigate('dashboard')} />;
      case 'perfil':
         return (
            <div className="p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Perfil de Administrador</h1>
                <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                    <div className="flex items-center space-x-6">
                        <img src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=" alt="Admin Avatar" className="w-24 h-24 rounded-full object-cover"/>
                        <div>
                            <h2 className="text-2xl font-semibold">{getAdminUserName()}</h2>
                            <p className="text-gray-500">Administrador de Activos</p>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900">sebastian.admin@cnfl.com</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Departamento</dt>
                                <dd className="mt-1 text-sm text-gray-900">IT</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Miembro desde</dt>
                                <dd className="mt-1 text-sm text-gray-900">15 de Enero, 2020</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Permisos</dt>
                                <dd className="mt-1 text-sm text-gray-900">Acceso total</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        );
      case 'actionForm':
          return <ActionView 
                    actionState={actionState}
                    onCancel={handleCancelAction}
                    onSave={handleAssetUpdate}
                  />;
      default:
        return <Dashboard assets={assets} onViewAsset={handleViewAsset} onAction={handleTriggerAction} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex text-gray-800">
      <Sidebar currentView={currentView} onNavigate={handleNavigate} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col">
        <Header userName={getAdminUserName()} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderAdminContent()}
        </main>
      </div>
    </div>
  );
};

export default App;