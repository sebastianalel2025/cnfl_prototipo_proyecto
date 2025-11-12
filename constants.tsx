import React from 'react';
import { Asset, Request } from './types';

// FIX: Updated the logo URL to the correct one provided by the user.
export const CnflLogo: React.FC = () => (
    <img src="https://alineamiento.electronoticiascnfl.com/wp-content/uploads/2022/05/CNFL-LOGO.png" alt="CNFL Logo" className="h-12" />
);


export const DashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);

export const RequestsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const ReportsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

export const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
    </svg>
);

export const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
);

export const ASSETS_DATA: Asset[] = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        dependency: 'IT',
        acquisitionDate: '15/01/2023',
        maintenanceDate: '15/01/2024',
        malfunctionDate: null,
        employee: 'Juan Perez',
        status: 'Active',
        type: 'De alta',
        currentValue: 1200000,
        originalCost: 1500000,
        history: [
          { date: '15/01/2024', type: 'Mantenimiento preventivo', status: 'Maintenance', details: 'Limpieza interna y actualización de software.', user: 'Soporte IT', cost: 'CRC 25,000' },
          { date: '15/01/2023', type: 'Alta', status: 'Active', details: 'Adquisición de nuevo equipo.', user: 'Admin' },
        ],
    },
    {
        id: 2,
        name: 'Impresora HP LaserJet Pro',
        dependency: 'Oficina',
        acquisitionDate: '02/03/2022',
        maintenanceDate: '01/06/2024',
        malfunctionDate: '20/07/2024',
        employee: 'Ana Rodriguez',
        status: 'Malfunctioned',
        type: 'Mantenimiento correctivo',
        currentValue: 150000,
        originalCost: 300000,
        history: [
          { date: '20/07/2024', type: 'Avería', status: 'Malfunctioned', details: 'Atasco de papel, no imprime.', user: 'Ana Rodriguez' },
          { date: '01/06/2024', type: 'Mantenimiento preventivo', status: 'Maintenance', details: 'Cambio de toner y limpieza.', user: 'Soporte IT', cost: 'CRC 40,000' },
          { date: '02/03/2022', type: 'Alta', status: 'Active', details: 'Compra de impresora para oficina.', user: 'Admin' },
        ],
    },
    {
        id: 3,
        name: 'Servidor Dell PowerEdge',
        dependency: 'IT',
        acquisitionDate: '10/11/2021',
        maintenanceDate: '10/05/2024',
        malfunctionDate: null,
        employee: 'N/A',
        status: 'Maintenance',
        type: 'Mantenimiento preventivo',
        currentValue: 2500000,
        originalCost: 4000000,
        history: [
          { date: '10/05/2024', type: 'Mantenimiento preventivo', status: 'Maintenance', details: 'Actualización de firmware y revisión de discos.', user: 'Admin IT' },
          { date: '10/11/2021', type: 'Alta', status: 'Active', details: 'Instalación de servidor principal.', user: 'Admin IT' },
        ],
    },
    {
        id: 4,
        name: 'Monitor LG UltraWide',
        dependency: 'Diseño',
        acquisitionDate: '22/08/2023',
        maintenanceDate: 'N/A',
        malfunctionDate: null,
        employee: 'Carlos Sanchez',
        status: 'Active',
        type: 'De alta',
        currentValue: 200000,
        originalCost: 250000,
        history: [
            { date: '22/08/2023', type: 'Alta', status: 'Active', details: 'Asignado a nuevo diseñador.', user: 'Admin' },
        ],
    },
    {
        id: 5,
        name: 'Silla Ergonómica Herman Miller',
        dependency: 'RRHH',
        acquisitionDate: '05/04/2022',
        maintenanceDate: 'N/A',
        malfunctionDate: '01/08/2024',
        employee: 'Laura Jimenez',
        status: 'Malfunctioned',
        type: 'N/A',
        currentValue: 400000,
        originalCost: 600000,
        history: [
            { date: '01/08/2024', type: 'Avería', status: 'Malfunctioned', details: 'El pistón de gas no funciona.', user: 'Laura Jimenez' },
            { date: '05/04/2022', type: 'Alta', status: 'Active', details: 'Compra de mobiliario.', user: 'Admin' },
        ],
    },
    {
        id: 6,
        name: 'Proyector Epson PowerLite',
        dependency: 'Sala de reuniones',
        acquisitionDate: '19/09/2020',
        maintenanceDate: '15/07/2024',
        malfunctionDate: null,
        employee: 'N/A',
        status: 'Active',
        type: 'Mantenimiento correctivo',
        currentValue: 180000,
        originalCost: 450000,
        history: [
            { date: '15/07/2024', type: 'Mantenimiento correctivo', status: 'Reparación', details: 'Cambio de lámpara.', user: 'Soporte IT', cost: 'CRC 75,000' },
            { date: '19/09/2020', type: 'Alta', status: 'Active', details: 'Instalación en sala de reuniones.', user: 'Admin' },
        ],
    },
    {
        id: 7,
        name: 'MacBook Pro 16"',
        dependency: 'Gerencia',
        acquisitionDate: '03/02/2024',
        maintenanceDate: 'N/A',
        malfunctionDate: null,
        employee: 'Sofia Vargas',
        status: 'Active',
        type: 'De alta',
        currentValue: 1800000,
        originalCost: 2000000,
        history: [
            { date: '03/02/2024', type: 'Alta', status: 'Active', details: 'Equipo asignado a Gerencia.', user: 'Admin' },
        ],
    },
     {
        id: 8,
        name: 'Teléfono IP Cisco',
        dependency: 'Recepción',
        acquisitionDate: '11/11/2022',
        maintenanceDate: 'N/A',
        malfunctionDate: null,
        employee: 'Marta Solano',
        status: 'Active',
        type: 'N/A',
        currentValue: 50000,
        originalCost: 80000,
        history: [
            { date: '11/11/2022', type: 'Alta', status: 'Active', details: 'Instalación en recepción.', user: 'Admin IT' },
        ],
    },
    {
        id: 9,
        name: 'Router WiFi 6 TPLink',
        dependency: 'IT',
        acquisitionDate: '01/06/2023',
        maintenanceDate: '01/06/2024',
        malfunctionDate: null,
        employee: 'N/A',
        status: 'Active',
        type: 'N/A',
        currentValue: 75000,
        originalCost: 90000,
        history: [
            { date: '01/06/2024', type: 'Mantenimiento preventivo', status: 'Maintenance', details: 'Actualización de firmware de seguridad.', user: 'Admin IT' },
            { date: '01/06/2023', type: 'Alta', status: 'Active', details: 'Mejora de red interna.', user: 'Admin IT' },
        ],
    },
    {
        id: 10,
        name: 'Vehículo Toyota Hilux',
        dependency: 'Flota',
        acquisitionDate: '15/03/2021',
        maintenanceDate: '15/03/2024',
        malfunctionDate: null,
        employee: 'Varios',
        status: 'Maintenance',
        type: 'Mantenimiento preventivo',
        currentValue: 15000000,
        originalCost: 22000000,
        history: [
            { date: '15/03/2024', type: 'Mantenimiento preventivo', status: 'Maintenance', details: 'Revisión de 50,000 km.', user: 'Taller Externo', cost: 'CRC 250,000' },
            { date: '15/03/2021', type: 'Alta', status: 'Active', details: 'Adquisición para equipo de campo.', user: 'Admin' },
        ],
    },
    {
        id: 11,
        name: 'Escritorio de oficina',
        dependency: 'Mobiliario',
        acquisitionDate: '20/01/2020',
        maintenanceDate: 'N/A',
        malfunctionDate: '10/08/2024',
        employee: 'Pedro Mora',
        status: 'Malfunctioned',
        type: 'N/A',
        currentValue: 30000,
        originalCost: 75000,
        history: [
            { date: '10/08/2024', type: 'Avería', status: 'Malfunctioned', details: 'Pata de escritorio rota.', user: 'Pedro Mora' },
            { date: '20/01/2020', type: 'Alta', status: 'Active', details: 'Compra inicial de mobiliario.', user: 'Admin' },
        ],
    },
    {
        id: 12,
        name: 'Tablet Samsung Galaxy Tab',
        dependency: 'Ventas',
        acquisitionDate: '05/09/2023',
        maintenanceDate: 'N/A',
        malfunctionDate: null,
        employee: 'Elena Castillo',
        status: 'Active',
        type: 'De alta',
        currentValue: 180000,
        originalCost: 220000,
        history: [
            { date: '05/09/2023', type: 'Alta', status: 'Active', details: 'Asignada a equipo de ventas.', user: 'Admin' },
        ],
    },
    {
        id: 13,
        name: 'Aire Acondicionado Central',
        dependency: 'Edificio',
        acquisitionDate: '10/07/2019',
        maintenanceDate: '10/07/2024',
        malfunctionDate: null,
        employee: 'N/A',
        status: 'Maintenance',
        type: 'Mantenimiento preventivo',
        currentValue: 3000000,
        originalCost: 5000000,
        history: [
            { date: '10/07/2024', type: 'Mantenimiento preventivo', status: 'Maintenance', details: 'Limpieza de filtros y revisión de gas.', user: 'Mantenimiento Externo', cost: 'CRC 150,000' },
            { date: '10/07/2019', type: 'Alta', status: 'Active', details: 'Instalación inicial.', user: 'Admin' },
        ],
    },
    {
        id: 14,
        name: 'Cafetera Oster',
        dependency: 'Cocina',
        acquisitionDate: '22/11/2023',
        maintenanceDate: 'N/A',
        malfunctionDate: null,
        employee: 'N/A',
        status: 'Active',
        type: 'N/A',
        currentValue: 20000,
        originalCost: 25000,
        history: [
             { date: '22/11/2023', type: 'Alta', status: 'Active', details: 'Compra para área de cocina.', user: 'Admin' },
        ],
    },
    {
        id: 15,
        name: 'Extintor de Incendios',
        dependency: 'Seguridad',
        acquisitionDate: '01/01/2024',
        maintenanceDate: '01/01/2025',
        malfunctionDate: null,
        employee: 'N/A',
        status: 'Active',
        type: 'Mantenimiento preventivo',
        currentValue: 15000,
        originalCost: 15000,
        history: [
            { date: '01/01/2024', type: 'Alta', status: 'Active', details: 'Recarga y certificación anual.', user: 'Seguridad' },
        ],
    },
    {
        id: 16,
        name: 'Teclado Mecánico Keychron',
        dependency: 'IT',
        acquisitionDate: '18/05/2024',
        maintenanceDate: 'N/A',
        malfunctionDate: null,
        employee: 'Juan Perez',
        status: 'Active',
        type: 'De alta',
        currentValue: 60000,
        originalCost: 65000,
        history: [
             { date: '18/05/2024', type: 'Alta', status: 'Active', details: 'Reemplazo de teclado anterior.', user: 'Admin IT' },
        ],
    }
];

export const REQUESTS_DATA: Request[] = [
    {
        id: 101,
        type: 'Mantenimiento/Avería',
        title: 'Reparación de impresora (ID 2)',
        date: '21/07/2024',
        applicant: 'Ana Rodriguez',
        status: 'Pendiente',
        assignee: 'Soporte IT',
    },
    {
        id: 102,
        type: 'Nuevo activo',
        title: 'Solicitud de monitor adicional para Diseño',
        date: '18/07/2024',
        applicant: 'Carlos Sanchez',
        status: 'En análisis',
        assignee: 'Gerencia',
    },
    {
        id: 103,
        type: 'Dar de baja',
        title: 'Baja de equipo obsoleto (PC-05)',
        date: '15/07/2024',
        applicant: 'Admin IT',
        status: 'Cerrado',
        assignee: 'Admin IT',
    },
    {
        id: 104,
        type: 'Cambio de propietario',
        title: 'Traspaso de laptop de Juan a nuevo empleado',
        date: '12/07/2024',
        applicant: 'RRHH',
        status: 'Cerrado',
        assignee: 'Admin',
    },
    {
        id: 105,
        type: 'Mantenimiento/Avería',
        title: 'Silla de Laura Jimenez no funciona (ID 5)',
        date: '02/08/2024',
        applicant: 'Laura Jimenez',
        status: 'Pendiente',
        assignee: 'Mantenimiento',
    },
    {
        id: 106,
        type: 'Nuevo activo',
        title: 'Software de análisis financiero',
        date: '28/07/2024',
        applicant: 'Finanzas',
        status: 'Rechazado',
        assignee: 'Gerencia',
    },
    {
        id: 107,
        type: 'Mantenimiento/Avería',
        title: 'Aire acondicionado de oficina no enfría',
        date: '03/08/2024',
        applicant: 'RRHH',
        status: 'Pendiente',
        assignee: 'Mantenimiento',
    },
    {
        id: 108,
        type: 'Nuevo activo',
        title: 'Licencias de Adobe Creative Cloud',
        date: '25/07/2024',
        applicant: 'Diseño',
        status: 'En análisis',
        assignee: 'Admin IT',
    },
];