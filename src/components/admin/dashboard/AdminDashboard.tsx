'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrer les composants ChartJS nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardStats {
  totalVehicles: number;
  totalUsers: number;
  totalViews: number;
  totalSales: number;
  recentVehicles: {
    id: string;
    title: string;
    price: number;
    date: string;
    status: string;
  }[];
  recentUsers: {
    id: string;
    name: string;
    email: string;
    date: string;
  }[];
  activityLog: {
    id: string;
    user: string;
    action: string;
    target: string;
    date: string;
  }[];
  salesData: {
    labels: string[];
    data: number[];
  };
  viewsData: {
    labels: string[];
    data: number[];
  };
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    // Simuler le chargement des données depuis une API
    setTimeout(() => {
      const mockStats: DashboardStats = {
        totalVehicles: 156,
        totalUsers: 423,
        totalViews: 15782,
        totalSales: 42,
        recentVehicles: [
          { id: '1', title: 'Renault Clio IV 1.5 dCi 90ch', price: 12500, date: '2023-04-01', status: 'published' },
          { id: '2', title: 'Peugeot 3008 1.6 BlueHDi 120ch', price: 18900, date: '2023-03-29', status: 'published' },
          { id: '3', title: 'Volkswagen Golf VII 2.0 TDI 150ch', price: 15700, date: '2023-03-28', status: 'pending' },
          { id: '4', title: 'Citroën C3 1.2 PureTech 82ch', price: 9800, date: '2023-03-27', status: 'published' },
          { id: '5', title: 'BMW Série 3 320d xDrive 190ch', price: 29500, date: '2023-03-26', status: 'published' }
        ],
        recentUsers: [
          { id: '1', name: 'Jean Dupont', email: 'jean.dupont@example.com', date: '2023-04-02' },
          { id: '2', name: 'Marie Martin', email: 'marie.martin@example.com', date: '2023-04-01' },
          { id: '3', name: 'Pierre Durand', email: 'pierre.durand@example.com', date: '2023-03-30' },
          { id: '4', name: 'Sophie Leroy', email: 'sophie.leroy@example.com', date: '2023-03-29' },
          { id: '5', name: 'Thomas Bernard', email: 'thomas.bernard@example.com', date: '2023-03-28' }
        ],
        activityLog: [
          { id: '1', user: 'Jean Dupont', action: 'a publié', target: 'une annonce', date: '2023-04-02 14:35' },
          { id: '2', user: 'Marie Martin', action: 'a modifié', target: 'son profil', date: '2023-04-02 11:20' },
          { id: '3', user: 'Admin', action: 'a approuvé', target: 'une annonce', date: '2023-04-01 16:45' },
          { id: '4', user: 'Pierre Durand', action: 'a contacté', target: 'un vendeur', date: '2023-04-01 10:15' },
          { id: '5', user: 'Sophie Leroy', action: 's\'est inscrite', target: '', date: '2023-03-31 09:30' }
        ],
        salesData: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
          data: [5, 8, 12, 15, 10, 14, 18, 20, 15, 12, 8, 10]
        },
        viewsData: {
          labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          data: [520, 680, 750, 620, 830, 950, 680]
        }
      };
      setStats(mockStats);
      setIsLoading(false);
    }, 1000);
  }, [timeRange]);

  if (isLoading || !stats) {
    return (
      <div className="flex justify-center items-center h-64">
        <svg className="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    ) ;
  }

  const salesChartData = {
    labels: stats.salesData.labels,
    datasets: [
      {
        label: 'Ventes',
        data: stats.salesData.data,
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const viewsChartData = {
    labels: stats.viewsData.labels,
    datasets: [
      {
        label: 'Vues',
        data: stats.viewsData.data,
        fill: false,
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgba(16, 185, 129, 1)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* En-tête du tableau de bord */}
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Tableau de bord
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <select
              id="timeRange"
              name="timeRange"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="7d">7 derniers jours</option>
              <option value="30d">30 derniers jours</option>
              <option value="90d">90 derniers jours</option>
              <option value="1y">Cette année</option>
            </select>
          </div>
        </div>
      </div>

      {/* Statistiques générales */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Véhicules
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      {stats.totalVehicles}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/vehicles" className="font-medium text-blue-600 hover:text-blue-500">
                Voir tous les véhicules
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Utilisateurs
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      {stats.totalUsers}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/users" className="font-medium text-blue-600 hover:text-blue-500">
                Voir tous les utilisateurs
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Vues
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      {stats.totalViews.toLocaleString() }
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/analytics" className="font-medium text-blue-600 hover:text-blue-500">
                Voir les statistiques
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Ventes
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      {stats.totalSales}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/sales" className="font-medium text-blue-600 hover:text-blue-500">
                Voir toutes les ventes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Ventes mensuelles</h3>
            <div className="mt-4 h-64">
              <Bar data={salesChartData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Vues hebdomadaires</h3>
            <div className="mt-4 h-64">
              <Line data={viewsChartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Listes récentes */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Véhicules récents
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-hidden overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Titre
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stats.recentVehicles.map((vehicle)  => (
                    <tr key={vehicle.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Link href={`/admin/vehicles/${vehicle.id}`} className="text-blue-600 hover:text-blue-900">
                          {vehicle.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.price.toLocaleString()} €
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          vehicle.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {vehicle.status === 'published' ? 'Publié' : 'En attente'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/vehicles" className="font-medium text-blue-600 hover:text-blue-500">
                Voir tous les véhicules
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Activité récente
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {stats.activityLog.map((activity) => (
                <li key={activity.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {activity.user.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.user}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.action} {activity.target}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {activity.date}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link href="/admin/activity" className="font-medium text-blue-600 hover:text-blue-500">
                Voir toute l'activité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
