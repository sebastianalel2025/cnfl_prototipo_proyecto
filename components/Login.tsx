import React, { useState } from 'react';
import { CnflLogo } from '../constants';

interface LoginProps {
  onLogin: (role: 'admin' | 'user') => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [role, setRole] = useState<'admin' | 'user'>('admin');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
       <div className="mb-8 p-4 bg-orange-500 rounded-lg shadow-lg">
           <CnflLogo />
       </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
              id="username"
              type="text"
              placeholder="admin@cnfl.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white text-black"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rol
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
                className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <label htmlFor="admin" className="mr-4 text-black">Administrador</label>
              <input
                type="radio"
                id="user"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
                 className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <label htmlFor="user" className="text-black">Usuario</label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
