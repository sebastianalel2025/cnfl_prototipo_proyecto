import React from 'react';
import { SearchIcon } from '../constants';

interface HeaderProps {
    userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl text-gray-800">
        Hola, <span className="font-semibold">{userName}</span>
      </h1>
      <div className="flex items-center space-x-4">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search asset, file, user"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon className="w-5 h-5"/>
          </div>
        </div>
        <img
          src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;