import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface Vehicle {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  images: string[];
  description: string;
  features: string[];
  seller: {
    name: string;
    type: 'professional' | 'individual';
    location: string;
    rating: number;
    phone: string;
  };
  certified: boolean;
}

// Mock data
const vehicle: Vehicle = {
  id: 'v1',
  title: 'Renault Clio 1.5 dCi 90ch',
  brand: 'Renault',
  model: 'Clio',
  year: 2019,
  price: 12500,
  mileage: 45000,
  fuel: 'Diesel',
  transmission: 'Manuelle',
  images: [
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1544381272-a0fecb3dd255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  ],
  description: `Cette Renault Clio 1.5 dCi 90ch est en excellent état. Elle a été régulièrement entretenue et dispose d'un carnet d'entretien complet. La voiture est équipée de la climatisation, du régulateur de vitesse, du système de navigation, des capteurs de stationnement arrière et de jantes en alliage.

Le moteur diesel est économique et offre une bonne puissance pour une conduite en ville comme sur autoroute. La boîte manuelle à 5 vitesses est souple et précise.

Le véhicule a passé tous nos contrôles techniques et est certifié par notre équipe de professionnels. Il bénéficie d'une garantie de 12 mois.`,
  features: [
    'Climatisation',
    'Régulateur de vitesse',
    'Système de navigation',
    'Capteurs de stationnement arrière',
    'Jantes en alliage',
    'Bluetooth',
    'USB',
    'Vitres électriques',
    'Verrouillage centralisé',
    'Direction assistée',
    'ABS',
    'ESP',
    'Airbags'
  ],
  seller: {
    name: 'Garage Central',
    type: 'professional',
    location: 'Paris',
    rating: 4.8,
    phone: '01 23 45 67 89'
  },
  certified: true
};

export default function VehicleDetailPage({ params }: { params: { id: string } })  {
  // Dans une application réelle, vous utiliseriez params.id pour récupérer les données du véhicule
  
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/vehicles" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux véhicules
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{vehicle.title}</h1>
              <p className="mt-1 text-sm text-gray-500">
                {vehicle.year} • {vehicle.mileage.toLocaleString() } km • {vehicle.fuel} • {vehicle.transmission}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">{vehicle.price.toLocaleString()} €</p>
              {vehicle.certified && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Véhicule certifié
                </span>
              ) }
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <div className="relative h-96">
                <Image
                  src={vehicle.images[0]}
                  alt={vehicle.title}
                  fill
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {vehicle.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-44">
                    <Image
                      src={image}
                      alt={`${vehicle.title} - Image ${index + 2}`}
                      fill
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-lg font-medium text-gray-900">Description</h2>
                <div className="mt-4 text-gray-600 space-y-4">
                  {vehicle.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <h2 className="text-lg font-medium text-gray-900 mt-8">Caractéristiques</h2>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ) )}
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-medium text-gray-900">Vendeur</h2>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{vehicle.seller.name.charAt(0)}</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{vehicle.seller.name}</p>
                        <div className="flex items-center">
                          <p className="text-sm text-gray-500">{vehicle.seller.type === 'professional' ? 'Professionnel' : 'Particulier'}</p>
                          <span className="mx-1">•</span>
                          <p className="text-sm text-gray-500">{vehicle.seller.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(vehicle.seller.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ) )}
                      </div>
                      <p className="ml-2 text-sm text-gray-500">{vehicle.seller.rating} sur 5</p>
                    </div>

                    <div className="mt-6">
                      <a
                        href={`tel:${vehicle.seller.phone}`}
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {vehicle.seller.phone}
                      </a>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contacter le vendeur
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-medium text-gray-900">Actions</h2>
                  <div className="mt-4 space-y-4">
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Ajouter aux favoris
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Partager
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Rapport d'historique
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Véhicules similaires</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i)  => (
              <div key={i} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-155${i}899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    alt={`Véhicule similaire ${i}`}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href="#" className="hover:underline">
                      {vehicle.brand} {vehicle.model} {i === 1 ? '1.2 TCe 130ch' : i === 2 ? '1.6 dCi 110ch' : '1.3 TCe 150ch'}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {2020 + i} • {(30000 + i * 5000) .toLocaleString()} km • {i === 1 ? 'Essence' : i === 2 ? 'Diesel' : 'Essence'} • {i === 2 ? 'Automatique' : 'Manuelle'}
                  </p>
                  <p className="mt-2 text-xl font-bold text-gray-900">
                    {(13500 + i * 1500).toLocaleString()} €
                  </p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Voir le détail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
