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

// Mock data - même données que dans route.ts parent
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

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
)  {
  // Dans une application réelle, vous récupéreriez les données depuis une base de données
  const vehicleId = params.id;
  const vehicle = vehicles.find(v => v.id === vehicleId);
  
  if (!vehicle) {
    return NextResponse.json(
      { error: 'Véhicule non trouvé' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(vehicle);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Dans une application réelle, vous valideriez les données et les mettriez à jour dans une base de données
    const vehicleId = params.id;
    const vehicleIndex = vehicles.findIndex(v => v.id === vehicleId);
    
    if (vehicleIndex === -1) {
      return NextResponse.json(
        { error: 'Véhicule non trouvé' },
        { status: 404 }
      );
    }
    
    const data = await request.json();
    
    // Mise à jour du véhicule
    const updatedVehicle = {
      ...vehicles[vehicleIndex],
      ...data,
      updatedAt: new Date().toISOString()
    };
    
    // Dans une application réelle, vous mettriez à jour la base de données
    // Ici, nous simulons la mise à jour dans notre tableau de données
    vehicles[vehicleIndex] = updatedVehicle;
    
    return NextResponse.json({
      message: 'Véhicule mis à jour avec succès',
      vehicle: updatedVehicle
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du véhicule' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Dans une application réelle, vous supprimeriez les données dans une base de données
  const vehicleId = params.id;
  const vehicleIndex = vehicles.findIndex(v => v.id === vehicleId);
  
  if (vehicleIndex === -1) {
    return NextResponse.json(
      { error: 'Véhicule non trouvé' },
      { status: 404 }
    );
  }
  
  // Dans une application réelle, vous supprimeriez de la base de données
  // Ici, nous simulons la suppression de notre tableau de données
  const deletedVehicle = vehicles[vehicleIndex];
  vehicles.splice(vehicleIndex, 1);
  
  return NextResponse.json({
    message: 'Véhicule supprimé avec succès',
    vehicle: deletedVehicle
  });
}
