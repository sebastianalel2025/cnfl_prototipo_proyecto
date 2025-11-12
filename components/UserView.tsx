
import React, { useState } from 'react';
import Header from './Header';
import NewRequestForm from './NewRequestForm';
import AddReportForm from './AddReportForm';
// FIX: Import CnflLogo from constants to use the shared component.
import { ProfileIcon, LogoutIcon, ReportsIcon, RequestsIcon, CnflLogo } from '../constants';

type UserViewType = 'newRequest' | 'addReport' | 'perfil';

interface UserSidebarProps {
    currentView: UserViewType;
    onNavigate: (view: UserViewType) => void;
    onLogout: () => void;
}

// FIX: Removed local definition of CnflLogo. It's now imported from constants.tsx.

const UserNavItem: React.FC<{ icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }> = ({ icon, label, isActive, onClick }) => (
    <li>
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onClick(); }}
        className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
          isActive ? 'bg-white text-orange-500 shadow-md' : 'text-white hover:bg-orange-500'
        }`}
      >
        {icon}
        <span className="ml-3 font-medium">{label}</span>
      </a>
    </li>
);

const NewRequestIcon = RequestsIcon;
const AddReportIcon = ReportsIcon;

const UserSidebar: React.FC<UserSidebarProps> = ({ currentView, onNavigate, onLogout }) => {
    return (
        <aside className="w-64 bg-orange-600 text-white flex flex-col p-4 shadow-lg sticky top-0 h-screen">
          <div className="py-4 mb-4 bg-orange-500 rounded-lg flex items-center justify-center">
            <CnflLogo />
          </div>
          <nav className="flex-1">
            <ul>
                <UserNavItem label="Nueva Solicitud" icon={<NewRequestIcon className="w-6 h-6" />} isActive={currentView === 'newRequest'} onClick={() => onNavigate('newRequest')} />
                <UserNavItem label="Agregar Reporte" icon={<AddReportIcon className="w-6 h-6" />} isActive={currentView === 'addReport'} onClick={() => onNavigate('addReport')} />
            </ul>
          </nav>
          <div>
            <ul>
                <UserNavItem label="Perfil" icon={<ProfileIcon className="w-6 h-6" />} isActive={currentView === 'perfil'} onClick={() => onNavigate('perfil')} />
                <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} className="flex items-center p-3 my-1 rounded-lg text-white hover:bg-orange-500">
                        <LogoutIcon className="w-6 h-6" />
                        <span className="ml-3 font-medium">Salir</span>
                    </a>
                </li>
            </ul>
          </div>
        </aside>
    );
};

interface UserViewProps {
    onLogout: () => void;
}

const UserView: React.FC<UserViewProps> = ({ onLogout }) => {
    const [view, setView] = useState<UserViewType>('newRequest');

    const renderContent = () => {
        switch (view) {
            case 'newRequest':
                return <NewRequestForm onCancel={() => window.location.reload()} isUserView={true} />;
            case 'addReport':
                return <AddReportForm onCancel={() => window.location.reload()} />;
             case 'perfil':
                return (
                     <div className="p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Perfil de Usuario</h1>
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                            <div className="flex items-center space-x-6">
                                <img src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=" alt="User Avatar" className="w-24 h-24 rounded-full object-cover"/>
                                <div>
                                    <h2 className="text-2xl font-semibold">Steven</h2>
                                    <p className="text-gray-500">Usuario de Activos</p>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                                        <dd className="mt-1 text-sm text-gray-900">steven.user@cnfl.com</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Departamento</dt>
                                        <dd className="mt-1 text-sm text-gray-900">Logística</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">ID de Empleado</dt>
                                        <dd className="mt-1 text-sm text-gray-900">78910</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Permisos</dt>
                                        <dd className="mt-1 text-sm text-gray-900">Crear reportes y solicitudes</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex text-gray-800">
            <UserSidebar currentView={view} onNavigate={setView} onLogout={onLogout} />
            <div className="flex-1 flex flex-col">
                <Header userName="Steven" />
                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};
export default UserView;