import { NextResponse } from 'next/server';

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
  location: string;
  image: string;
  description: string;
  features: string[];
  certified: boolean;
  createdAt: string;
  updatedAt: string;
}

// Mock data
const vehicles: Vehicle[] = [
  {
    id: 'v1',
    title: 'Renault Clio 1.5 dCi 90ch',
    brand: 'Renault',
    model: 'Clio',
    year: 2019,
    price: 12500,
    mileage: 45000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    location: 'Paris',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    description: 'Véhicule en excellent état, entretien régulier, carnet complet.',
    features: ['Climatisation', 'Régulateur de vitesse', 'GPS', 'Bluetooth'],
    certified: true,
    createdAt: '2023-01-15T14:30:00Z',
    updatedAt: '2023-01-15T14:30:00Z'
  },
  {
    id: 'v2',
    title: 'Peugeot 308 1.6 BlueHDi 120ch',
    brand: 'Peugeot',
    model: '308',
    year: 2020,
    price: 15900,
    mileage: 32000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    location: 'Lyon',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    description: 'Première main, état impeccable, toutes options.',
    features: ['Toit panoramique', 'Sièges chauffants', 'Caméra de recul', 'Jantes alliage'],
    certified: true,
    createdAt: '2023-02-10T09:15:00Z',
    updatedAt: '2023-02-10T09:15:00Z'
  },
  {
    id: 'v3',
    title: 'Volkswagen Golf 1.4 TSI 125ch',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    price: 18500,
    mileage: 15000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    location: 'Marseille',
    image: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    description: 'Comme neuve, faible kilométrage, garantie constructeur.',
    features: ['Apple CarPlay', 'Android Auto', 'Aide au stationnement', 'Phares LED'],
    certified: true,
    createdAt: '2023-01-20T11:45:00Z',
    updatedAt: '2023-01-20T11:45:00Z'
  }
];

export async function GET(request: Request)  {
  // Dans une application réelle, vous récupéreriez les données depuis une base de données
  // et appliqueriez des filtres basés sur les paramètres de requête
  
  const { searchParams } = new URL(request.url);
  
  // Exemple de filtrage par marque
  const brand = searchParams.get('brand');
  let filteredVehicles = vehicles;
  
  if (brand) {
    filteredVehicles = vehicles.filter(vehicle => 
      vehicle.brand.toLowerCase() === brand.toLowerCase()
    );
  }
  
  // Exemple de filtrage par prix
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  
  if (minPrice) {
    filteredVehicles = filteredVehicles.filter(vehicle => 
      vehicle.price >= parseInt(minPrice)
    );
  }
  
  if (maxPrice) {
    filteredVehicles = filteredVehicles.filter(vehicle => 
      vehicle.price <= parseInt(maxPrice)
    );
  }
  
  return NextResponse.json({
    vehicles: filteredVehicles,
    total: filteredVehicles.length,
    page: 1,
    limit: 10
  });
}

export async function POST(request: Request) {
  try {
    // Dans une application réelle, vous valideriez les données et les enregistreriez dans une base de données
    const data = await request.json();
    
    // Validation simple
    if (!data.title || !data.brand || !data.model || !data.price) {
      return NextResponse.json(
        { error: 'Données incomplètes' },
        { status: 400 }
      );
    }
    
    // Création d'un nouvel ID
    const newId = `v${vehicles.length + 1}`;
    
    // Création du nouveau véhicule
    const newVehicle: Vehicle = {
      id: newId,
      ...data,
      certified: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Dans une application réelle, vous l'ajouteriez à la base de données
    // Ici, nous simulons l'ajout à notre tableau de données
    vehicles.push(newVehicle);
    
    return NextResponse.json(
      { message: 'Véhicule créé avec succès', vehicle: newVehicle },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création du véhicule' },
      { status: 500 }
    );
  }
}
