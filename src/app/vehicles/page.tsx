import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Véhicules à vendre | Prix de ma voiture',
  description: 'Découvrez notre sélection de véhicules d\'occasion vérifiés par des professionnels',
};

// Types
interface Vehicle {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  location: string;
  image: string;
}

// Mock data
const vehicles: Vehicle[] = [
  {
    id: 'v1',
    title: 'Renault Clio 1.5 dCi 90ch',
    price: 12500,
    year: 2019,
    mileage: 45000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    location: 'Paris',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'v2',
    title: 'Peugeot 308 1.6 BlueHDi 120ch',
    price: 15900,
    year: 2020,
    mileage: 32000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    location: 'Lyon',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'v3',
    title: 'Volkswagen Golf 1.4 TSI 125ch',
    price: 18500,
    year: 2021,
    mileage: 15000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    location: 'Marseille',
    image: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'v4',
    title: 'BMW Série 1 116i 109ch',
    price: 22900,
    year: 2022,
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Toulouse',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'v5',
    title: 'Audi A3 Sportback 35 TFSI 150ch',
    price: 29500,
    year: 2022,
    mileage: 12000,
    fuel: 'Essence',
    transmission: 'Automatique',
    location: 'Bordeaux',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'v6',
    title: 'Toyota Yaris 116h Dynamic',
    price: 19800,
    year: 2021,
    mileage: 18000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    location: 'Lille',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

export default function VehiclesPage()  {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Véhicules à vendre
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez notre sélection de véhicules d'occasion vérifiés par des professionnels
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {/* Filtres */}
          <div className="w-full md:w-64 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">
                    Prix
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="number"
                        name="min-price"
                        id="min-price"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Min"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="max-price"
                        id="max-price"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                    Marque
                  </label>
                  <div className="mt-1">
                    <select
                      id="brand"
                      name="brand"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Toutes les marques</option>
                      <option>Renault</option>
                      <option>Peugeot</option>
                      <option>Citroën</option>
                      <option>Volkswagen</option>
                      <option>BMW</option>
                      <option>Audi</option>
                      <option>Toyota</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
                    Carburant
                  </label>
                  <div className="mt-1">
                    <select
                      id="fuel"
                      name="fuel"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Tous les carburants</option>
                      <option>Essence</option>
                      <option>Diesel</option>
                      <option>Hybride</option>
                      <option>Électrique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                    Transmission
                  </label>
                  <div className="mt-1">
                    <select
                      id="transmission"
                      name="transmission"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Toutes les transmissions</option>
                      <option>Manuelle</option>
                      <option>Automatique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                    Année
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-4">
                    <div>
                      <select
                        id="min-year"
                        name="min-year"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="">Min</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                      </select>
                    </div>
                    <div>
                      <select
                        id="max-year"
                        name="max-year"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="">Max</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">
                    Kilométrage
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="number"
                        name="min-mileage"
                        id="min-mileage"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Min"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="max-mileage"
                        id="max-mileage"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Appliquer les filtres
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des véhicules */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                {vehicles.length} véhicules trouvés
              </div>
              <div>
                <select
                  id="sort"
                  name="sort"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md"
                >
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Année récente</option>
                  <option>Kilométrage croissant</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="relative h-48">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.title}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link href={`/vehicles/${vehicle.id}`} className="hover:underline">
                        {vehicle.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {vehicle.year} • {vehicle.mileage.toLocaleString()} km • {vehicle.fuel} • {vehicle.transmission}
                    </p>
                    <p className="mt-2 text-xl font-bold text-gray-900">
                      {vehicle.price.toLocaleString()} €
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {vehicle.location}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={`/vehicles/${vehicle.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Voir le détail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Précédent</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Suivant</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) ;
}
