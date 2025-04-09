'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  lastLogin?: string;
}

const roles = ['Administrateur', 'Professionnel', 'Éditeur', 'Utilisateur'];
const statuses = ['active', 'inactive', 'pending'];

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données depuis une API
    setTimeout(() => {
      const mockUsers: User[] = [
        {
          id: '1',
          name: 'Jean Dupont',
          email: 'jean.dupont@example.com',
          role: 'Administrateur',
          status: 'active',
          createdAt: '2023-01-15',
          lastLogin: '2023-04-01'
        },
        {
          id: '2',
          name: 'Marie Martin',
          email: 'marie.martin@example.com',
          role: 'Professionnel',
          status: 'active',
          createdAt: '2023-02-10',
          lastLogin: '2023-03-28'
        },
        {
          id: '3',
          name: 'Pierre Durand',
          email: 'pierre.durand@example.com',
          role: 'Éditeur',
          status: 'inactive',
          createdAt: '2023-01-20',
          lastLogin: '2023-02-15'
        },
        {
          id: '4',
          name: 'Sophie Leroy',
          email: 'sophie.leroy@example.com',
          role: 'Utilisateur',
          status: 'pending',
          createdAt: '2023-03-05'
        },
        {
          id: '5',
          name: 'Thomas Bernard',
          email: 'thomas.bernard@example.com',
          role: 'Professionnel',
          status: 'active',
          createdAt: '2023-02-25',
          lastLogin: '2023-04-02'
        }
      ];
      setUsers(mockUsers);
      setFilteredUsers(mockUsers);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let result = users;
    
    if (searchTerm) {
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (roleFilter) {
      result = result.filter(user => user.role === roleFilter);
    }
    
    if (statusFilter) {
      result = result.filter(user => user.status === statusFilter);
    }
    
    setFilteredUsers(result);
  }, [searchTerm, roleFilter, statusFilter, users]);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'inactive':
        return 'Inactif';
      case 'pending':
        return 'En attente';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Gestion des utilisateurs</h2>
        <Link href="/admin/users/new" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Ajouter un utilisateur
        </Link>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="search" className="sr-only">Rechercher</label>
            <input
              type="text"
              id="search"
              placeholder="Rechercher par nom ou email"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="role" className="sr-only">Rôle</label>
            <select
              id="role"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="">Tous les rôles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="status" className="sr-only">Statut</label>
            <select
              id="status"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Tous les statuts</option>
              {statuses.map(status => (
                <option key={status} value={status}>{getStatusLabel(status)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <div className="px-4 py-12 text-center">
          <svg className="animate-spin h-8 w-8 mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-2 text-sm text-gray-500">Chargement des utilisateurs...</p>
        </div>
      )  : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date d'inscription
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dernière connexion
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                    Aucun utilisateur trouvé
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(user.status)}`}>
                        {getStatusLabel(user.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastLogin || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/users/${user.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                        Modifier
                      </Link>
                      <button className="text-red-600 hover:text-red-900">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <span className="text-sm text-gray-700">
          Affichage de <span className="font-medium">{filteredUsers.length}</span> sur <span className="font-medium">{users.length}</span> utilisateurs
        </span>
      </div>
    </div>
  );
};

export default UserManagement;
