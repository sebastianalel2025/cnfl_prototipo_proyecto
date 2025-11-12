import React from 'react';
import { View } from '../types';
// FIX: Import CnflLogo from constants to use the shared component.
import { DashboardIcon, RequestsIcon, ReportsIcon, ProfileIcon, LogoutIcon, CnflLogo } from '../constants';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  onLogout: () => void;
}

// FIX: Removed local definition of CnflLogo. It's now imported from constants.tsx.


const NavItem: React.FC<{ icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }> = ({ icon, label, isActive, onClick }) => (
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

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, onLogout }) => {
  const navItems: { view: View; label: string; icon: React.ReactNode }[] = [
    { view: 'dashboard', label: 'Dashboard', icon: <DashboardIcon className="w-6 h-6" /> },
    { view: 'solicitudes', label: 'Solicitudes', icon: <RequestsIcon className="w-6 h-6" /> },
    { view: 'reportes', label: 'Reportes', icon: <ReportsIcon className="w-6 h-6" /> },
  ];

  const profileItems: { view: View; label: string; icon: React.ReactNode }[] = [
    { view: 'perfil', label: 'Perfil', icon: <ProfileIcon className="w-6 h-6" /> },
  ];
  
  return (
    <aside className="w-64 bg-orange-600 text-white flex flex-col p-4 shadow-lg sticky top-0 h-screen">
      <div className="py-4 mb-4 bg-orange-500 rounded-lg flex items-center justify-center">
        <CnflLogo />
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map(item => (
            <NavItem
              key={item.view}
              icon={item.icon}
              label={item.label}
              isActive={currentView === item.view}
              onClick={() => onNavigate(item.view)}
            />
          ))}
        </ul>
      </nav>
      <div>
        <ul>
          {profileItems.map(item => (
            <NavItem
              key={item.view}
              icon={item.icon}
              label={item.label}
              isActive={currentView === item.view}
              onClick={() => onNavigate(item.view)}
            />
          ))}
           <li>
              <a href="#" onClick={(e) => {e.preventDefault(); onLogout();}} className="flex items-center p-3 my-1 rounded-lg text-white hover:bg-orange-500">
                <LogoutIcon className="w-6 h-6" />
                <span className="ml-3 font-medium">Salir</span>
              </a>
            </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;