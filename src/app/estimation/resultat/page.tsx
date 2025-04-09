'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface EstimationResult {
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
  confidence: 'high' | 'medium' | 'low';
  vehicleDetails: {
    brand: string;
    model: string;
    year: string;
    image: string;
  };
  marketTrend: 'up' | 'stable' | 'down';
  similarVehicles: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
    year: string;
    mileage: number;
    location: string;
  }>;
}

// Mock data for car brands
const carBrands: Record<string, string> = {
  'renault': 'Renault',
  'peugeot': 'Peugeot',
  'citroen': 'Citroën',
  'volkswagen': 'Volkswagen',
  'bmw': 'BMW',
  'audi': 'Audi',
  'mercedes': 'Mercedes',
  'toyota': 'Toyota',
  'ford': 'Ford',
  'fiat': 'Fiat'
};

// Mock data for car models
const carModels: Record<string, Record<string, string>> = {
  'renault': {
    'clio': 'Clio',
    'megane': 'Megane',
    'captur': 'Captur',
    'scenic': 'Scenic',
    'kadjar': 'Kadjar'
  },
  'peugeot': {
    '208': '208',
    '308': '308',
    '3008': '3008',
    '5008': '5008',
    '508': '508'
  },
  // Add other brands as needed
};

// Mock car images
const carImages: Record<string, Record<string, string>> = {
  'renault': {
    'clio': 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'megane': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'captur': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'scenic': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'kadjar': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  'peugeot': {
    '208': 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    '308': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    '3008': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    '5008': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    '508': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Add other brands as needed
};

// Default image if specific model image not found
const defaultCarImage = 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

export default function EstimationResultPage()  {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<EstimationResult | null>(null);
  
  useEffect(() => {
    const fetchEstimation = async () => {
      setLoading(true);
      
      try {
        // Get parameters from URL
        const brand = searchParams.get('brand') || '';
        const model = searchParams.get('model') || '';
        const year = searchParams.get('year') || '';
        
        // In a real app, we would fetch the estimation from an API
        // For now, we'll simulate a delay and generate mock data
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Generate a realistic price range based on the vehicle
        const basePrice = Math.floor(Math.random() * 10000) + 5000; // Between 5000 and 15000
        const minPrice = Math.floor(basePrice * 0.9);
        const maxPrice = Math.floor(basePrice * 1.1);
        const averagePrice = Math.floor((minPrice + maxPrice) / 2);
        
        // Get brand and model display names
        const brandName = carBrands[brand] || brand;
        const modelName = (carModels[brand] && carModels[brand][model]) || model;
        
        // Get car image
        const carImage = (carImages[brand] && carImages[brand][model]) || defaultCarImage;
        
        // Generate mock similar vehicles
        const similarVehicles = Array.from({ length: 3 }, (_, i) => ({
          id: `v${i + 1}`,
          title: `${brandName} ${modelName} ${Math.floor(Math.random() * 3) + 2018}`,
          price: Math.floor(basePrice * (0.9 + Math.random() * 0.3)),
          image: carImage,
          year: `${Math.floor(Math.random() * 3) + 2018}`,
          mileage: Math.floor(Math.random() * 80000) + 20000,
          location: ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille'][Math.floor(Math.random() * 5)]
        }));
        
        // Set the result
        setResult({
          minPrice,
          maxPrice,
          averagePrice,
          confidence: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)] as 'high' | 'medium' | 'low',
          vehicleDetails: {
            brand: brandName,
            model: modelName,
            year,
            image: carImage
          },
          marketTrend: ['up', 'stable', 'down'][Math.floor(Math.random() * 3)] as 'up' | 'stable' | 'down',
          similarVehicles
        });
      } catch (error) {
        console.error('Error fetching estimation:', error);
        // Handle error (show error message, etc.)
      } finally {
        setLoading(false);
      }
    };
    
    fetchEstimation();
  }, [searchParams]);
  
  // Helper function to format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  };
  
  // Render loading state
  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Calcul de votre estimation en cours...
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Nous analysons les données du marché pour vous fournir une estimation précise.
            </p>
            
            <div className="mt-10 flex justify-center">
              <svg className="animate-spin h-16 w-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    ) ;
  }
  
  // Render error state if no result
  if (!result) {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Impossible de calculer l'estimation
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Une erreur s'est produite lors du calcul de l'estimation. Veuillez réessayer ultérieurement.
            </p>
            
            <div className="mt-10">
              <Link
                href="/estimation"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Retour à l'estimation
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Render result
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Estimation de votre {result.vehicleDetails.brand} {result.vehicleDetails.model}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Voici l'estimation de la valeur de votre véhicule basée sur les données du marché actuel.
          </p>
        </div>
        
        {/* Main result card */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-1/3">
              <Image
                src={result.vehicleDetails.image}
                alt={`${result.vehicleDetails.brand} ${result.vehicleDetails.model}`}
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                {result.vehicleDetails.year} • Estimation {
                  result.confidence === 'high' ? 'à haute précision' :
                  result.confidence === 'medium' ? 'à précision moyenne' :
                  'à précision limitée'
                }
              </div>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {result.vehicleDetails.brand} {result.vehicleDetails.model}
              </h2>
              
              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-blue-600">
                    {formatPrice(result.averagePrice)}
                  </span>
                  <span className="ml-2 text-xl text-gray-500">
                    en moyenne
                  </span>
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span>Fourchette de prix: {formatPrice(result.minPrice)} - {formatPrice(result.maxPrice)}</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className={`flex-shrink-0 rounded-full p-1 ${
                  result.marketTrend === 'up' ? 'bg-green-100' :
                  result.marketTrend === 'stable' ? 'bg-blue-100' :
                  'bg-red-100'
                }`}>
                  <svg className={`h-5 w-5 ${
                    result.marketTrend === 'up' ? 'text-green-500' :
                    result.marketTrend === 'stable' ? 'text-blue-500' :
                    'text-red-500'
                  }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    {result.marketTrend === 'up' && (
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    ) }
                    {result.marketTrend === 'stable' && (
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    )}
                    {result.marketTrend === 'down' && (
                      <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                    )}
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Tendance du marché
                  </p>
                  <p className="text-sm text-gray-500">
                    {result.marketTrend === 'up' && 'Prix en hausse sur ce modèle'}
                    {result.marketTrend === 'stable' && 'Prix stable sur ce modèle'}
                    {result.marketTrend === 'down' && 'Prix en baisse sur ce modèle'}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <Link
                  href="/vendre"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Vendre ma voiture
                </Link>
                <Link
                  href="/estimation"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Nouvelle estimation
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Explanation section */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-12">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Comment interpréter cette estimation ?
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Fourchette de prix
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  La fourchette de prix représente l'intervalle dans lequel la valeur de votre véhicule se situe probablement. Elle est calculée en fonction des transactions récentes pour des véhicules similaires au vôtre.
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Prix moyen
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Le prix moyen est la valeur centrale de notre estimation. C'est le prix auquel des véhicules similaires au vôtre se vendent actuellement sur le marché.
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Niveau de confiance
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Le niveau de confiance indique la précision de notre estimation. Il dépend du nombre de transactions récentes pour des véhicules similaires et de la stabilité des prix sur ce segment.
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Tendance du marché
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  La tendance du marché indique l'évolution récente des prix pour ce type de véhicule. Une tendance à la hausse signifie que les prix augmentent, ce qui peut être favorable si vous souhaitez vendre.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        
        {/* Similar vehicles section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Véhicules similaires sur le marché
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {result.similarVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {vehicle.title}
                  </h3>
                  <p className="mt-1 text-2xl font-semibold text-blue-600">
                    {formatPrice(vehicle.price)}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{vehicle.year} • {vehicle.mileage.toLocaleString('fr-FR')} km • {vehicle.location}</span>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Voir l'annonce
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12 lg:px-16 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Prêt à vendre votre véhicule au meilleur prix ?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
              Créez votre annonce en quelques minutes et recevez des offres de particuliers et de professionnels.
            </p>
            <div className="mt-8">
              <Link
                href="/vendre"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Vendre ma voiture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
