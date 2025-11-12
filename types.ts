export type View = 'dashboard' | 'solicitudes' | 'reportes' | 'perfil' | 'assetDetail' | 'newRequest' | 'addReport' | 'actionForm';
export type ActionType = 'alta' | 'baja' | 'mantenimiento';
export type UserRole = 'admin' | 'user' | null;

export type AssetStatus = 'Active' | 'Malfunctioned' | 'Maintenance';
export type AssetType = 'N/A' | 'De alta' | 'De baja' | 'Mantenimiento correctivo' | 'Mantenimiento preventivo' | 'Mantenimiento temporal';

export interface Asset {
  id: number;
  name: string;
  dependency: string;
  acquisitionDate: string;
  maintenanceDate: string;
  malfunctionDate: string | null;
  employee: string;
  status: AssetStatus;
  type: AssetType;
  currentValue: number;
  originalCost: number;
  documents?: string[];
  history: AssetHistory[];
}

export interface AssetHistory {
    date: string;
    type: string;
    status: AssetStatus | 'Baja' | 'Reparación';
    details: string;
    user: string;
    cost?: string;
    documents?: string[];
}

export type RequestStatus = 'Pendiente' | 'Rechazado' | 'Cerrado' | 'En análisis';
export type RequestType = 'Mantenimiento/Avería' | 'Nuevo activo' | 'Dar de baja' | 'Cambio de propietario';

export interface Request {
    id: number;
    type: RequestType;
    title: string;
    date: string;
    applicant: string;
    status: RequestStatus;
    assignee: string;
}

// Added for type safety in modal save operations
export type AssetUpdatePayload = {
    status?: AssetStatus;
    newHistory: Omit<AssetHistory, 'date'>;
    newType: AssetType;
};