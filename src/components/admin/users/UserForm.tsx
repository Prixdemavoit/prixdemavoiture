'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface UserFormProps {
  initialData?: {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
    status?: 'active' | 'inactive' | 'pending';
    permissions?: string[];
  };
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

const roles = ['Administrateur', 'Professionnel', 'Éditeur', 'Utilisateur'];
const statuses = [
  { value: 'active', label: 'Actif' },
  { value: 'inactive', label: 'Inactif' },
  { value: 'pending', label: 'En attente' }
];

const allPermissions = [
  { id: 'create_vehicle', label: 'Créer des annonces de véhicules' },
  { id: 'edit_vehicle', label: 'Modifier des annonces de véhicules' },
  { id: 'delete_vehicle', label: 'Supprimer des annonces de véhicules' },
  { id: 'manage_users', label: 'Gérer les utilisateurs' },
  { id: 'manage_settings', label: 'Gérer les paramètres du site' },
  { id: 'view_analytics', label: 'Voir les statistiques' },
  { id: 'manage_content', label: 'Gérer le contenu éditorial' },
  { id: 'approve_reviews', label: 'Approuver les avis' }
];

const UserForm: React.FC<UserFormProps> = ({ 
  initialData = {}, 
  onSubmit,
  isLoading = false
}) => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    password: '',
    confirmPassword: '',
    role: initialData.role || 'Utilisateur',
    status: initialData.status || 'active',
    permissions: initialData.permissions || []
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePermissionChange = (permissionId: string) => {
    setFormData(prev => {
      const permissions = [...prev.permissions];
      if (permissions.includes(permissionId)) {
        return { ...prev, permissions: permissions.filter(id => id !== permissionId) };
      } else {
        return { ...prev, permissions: [...permissions, permissionId] };
      }
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          {initialData.id ? 'Modifier l\'utilisateur' : 'Ajouter un utilisateur'}
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {initialData.id 
            ? 'Modifiez les informations de l\'utilisateur ci-dessous.' 
            : 'Remplissez le formulaire pour créer un nouvel utilisateur.'}
        </p>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              className={`${
                activeTab === 'general'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('general')}
            >
              Informations générales
            </button>
            <button
              className={`${
                activeTab === 'security'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('security')}
            >
              Sécurité
            </button>
            <button
              className={`${
                activeTab === 'permissions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab('permissions')}
            >
              Permissions
            </button>
          </nav>
        </div>
        
        <form onSubmit={handleSubmit}>
          {activeTab === 'general' && (
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Rôle
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Statut
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    {statuses.map(status => (
                      <option key={status.value} value={status.value}>{status.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                    required={!initialData.id}
                  />
                  {initialData.id && (
                    <p className="mt-1 text-xs text-gray-500">
                      Laissez vide pour conserver le mot de passe actuel.
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!initialData.id}
                  />
                </div>
              </div>
              
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <div className="mt-4 text-sm text-red-600">
                  Les mots de passe ne correspondent pas.
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'permissions' && (
            <div className="px-4 py-5 sm:p-6">
              <fieldset>
                <legend className="text-sm font-medium text-gray-700">Permissions</legend>
                <div className="mt-4 space-y-4">
                  {allPermissions.map((permission) => (
                    <div key={permission.id} className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={permission.id}
                          name={permission.id}
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          checked={formData.permissions.includes(permission.id)}
                          onChange={() => handlePermissionChange(permission.id)}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={permission.id} className="font-medium text-gray-700">
                          {permission.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          )}
          
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Link
              href="/admin/users"
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-3"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={isLoading || (formData.password !== formData.confirmPassword && formData.password !== '')}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enregistrement...
                </>
              )  : (
                'Enregistrer'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
