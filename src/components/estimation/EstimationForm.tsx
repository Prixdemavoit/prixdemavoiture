'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Types
interface FormData {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: string;
  condition: string;
  zipCode: string;
  email: string;
}

interface FormErrors {
  brand?: string;
  model?: string;
  year?: string;
  fuel?: string;
  mileage?: string;
  condition?: string;
  zipCode?: string;
  email?: string;
}

// Mock data
const carBrands = [
  { id: 'renault', name: 'Renault' },
  { id: 'peugeot', name: 'Peugeot' },
  { id: 'citroen', name: 'Citroën' },
  { id: 'volkswagen', name: 'Volkswagen' },
  { id: 'bmw', name: 'BMW' },
  { id: 'audi', name: 'Audi' },
  { id: 'mercedes', name: 'Mercedes' },
  { id: 'toyota', name: 'Toyota' },
  { id: 'ford', name: 'Ford' },
  { id: 'fiat', name: 'Fiat' }
];

const fuelTypes = [
  { id: 'petrol', name: 'Essence' },
  { id: 'diesel', name: 'Diesel' },
  { id: 'hybrid', name: 'Hybride' },
  { id: 'electric', name: 'Électrique' },
  { id: 'lpg', name: 'GPL' }
];

const conditionOptions = [
  { id: 'excellent', name: 'Excellent' },
  { id: 'good', name: 'Bon' },
  { id: 'fair', name: 'Moyen' },
  { id: 'poor', name: 'Mauvais' }
];

// Generate years from current year to 15 years ago
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => ({
  id: (currentYear - i).toString(),
  name: (currentYear - i).toString()
}));

// Models based on brand (simplified mock data)
const modelsByBrand: Record<string, Array<{ id: string; name: string }>> = {
  renault: [
    { id: 'clio', name: 'Clio' },
    { id: 'megane', name: 'Megane' },
    { id: 'captur', name: 'Captur' },
    { id: 'scenic', name: 'Scenic' },
    { id: 'kadjar', name: 'Kadjar' }
  ],
  peugeot: [
    { id: '208', name: '208' },
    { id: '308', name: '308' },
    { id: '3008', name: '3008' },
    { id: '5008', name: '5008' },
    { id: '508', name: '508' }
  ],
  citroen: [
    { id: 'c3', name: 'C3' },
    { id: 'c4', name: 'C4' },
    { id: 'c5', name: 'C5' },
    { id: 'berlingo', name: 'Berlingo' },
    { id: 'ds3', name: 'DS3' }
  ],
  volkswagen: [
    { id: 'golf', name: 'Golf' },
    { id: 'polo', name: 'Polo' },
    { id: 'tiguan', name: 'Tiguan' },
    { id: 'passat', name: 'Passat' },
    { id: 't-roc', name: 'T-Roc' }
  ],
  bmw: [
    { id: 'serie1', name: 'Série 1' },
    { id: 'serie3', name: 'Série 3' },
    { id: 'serie5', name: 'Série 5' },
    { id: 'x1', name: 'X1' },
    { id: 'x3', name: 'X3' }
  ],
  audi: [
    { id: 'a1', name: 'A1' },
    { id: 'a3', name: 'A3' },
    { id: 'a4', name: 'A4' },
    { id: 'q3', name: 'Q3' },
    { id: 'q5', name: 'Q5' }
  ],
  mercedes: [
    { id: 'classe-a', name: 'Classe A' },
    { id: 'classe-c', name: 'Classe C' },
    { id: 'classe-e', name: 'Classe E' },
    { id: 'gla', name: 'GLA' },
    { id: 'glc', name: 'GLC' }
  ],
  toyota: [
    { id: 'yaris', name: 'Yaris' },
    { id: 'corolla', name: 'Corolla' },
    { id: 'rav4', name: 'RAV4' },
    { id: 'chr', name: 'C-HR' },
    { id: 'prius', name: 'Prius' }
  ],
  ford: [
    { id: 'fiesta', name: 'Fiesta' },
    { id: 'focus', name: 'Focus' },
    { id: 'kuga', name: 'Kuga' },
    { id: 'puma', name: 'Puma' },
    { id: 'mondeo', name: 'Mondeo' }
  ],
  fiat: [
    { id: '500', name: '500' },
    { id: 'panda', name: 'Panda' },
    { id: 'tipo', name: 'Tipo' },
    { id: '500x', name: '500X' },
    { id: 'punto', name: 'Punto' }
  ]
};

export default function EstimationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    brand: '',
    model: '',
    year: '',
    fuel: '',
    mileage: '',
    condition: '',
    zipCode: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [availableModels, setAvailableModels] = useState<Array<{ id: string; name: string }>>([]);

  // Handle brand change to update available models
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value;
    setFormData({ ...formData, brand, model: '' });
    setAvailableModels(brand ? modelsByBrand[brand] || [] : []);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is updated
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.brand) {
        newErrors.brand = 'Veuillez sélectionner une marque';
        isValid = false;
      }
      
      if (!formData.model) {
        newErrors.model = 'Veuillez sélectionner un modèle';
        isValid = false;
      }
      
      if (!formData.year) {
        newErrors.year = 'Veuillez sélectionner une année';
        isValid = false;
      }
      
      if (!formData.fuel) {
        newErrors.fuel = 'Veuillez sélectionner un type de carburant';
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.mileage) {
        newErrors.mileage = 'Veuillez indiquer le kilométrage';
        isValid = false;
      } else if (isNaN(Number(formData.mileage)) || Number(formData.mileage) < 0) {
        newErrors.mileage = 'Veuillez entrer un kilométrage valide';
        isValid = false;
      }
      
      if (!formData.condition) {
        newErrors.condition = 'Veuillez sélectionner l\'état du véhicule';
        isValid = false;
      }
    } else if (step === 3) {
      if (!formData.zipCode) {
        newErrors.zipCode = 'Veuillez entrer votre code postal';
        isValid = false;
      } else if (!/^\d{5}$/.test(formData.zipCode)) {
        newErrors.zipCode = 'Veuillez entrer un code postal valide (5 chiffres)';
        isValid = false;
      }
      
      if (!formData.email) {
        newErrors.email = 'Veuillez entrer votre adresse email';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Veuillez entrer une adresse email valide';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle next step
  const handleNext = () => {
    if (validateForm()) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      try {
        // In a real app, we would send the data to an API
        // For now, we'll simulate a delay and redirect to a results page
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Redirect to results page with query params
        router.push(`/estimation/resultat?brand=${formData.brand}&model=${formData.model}&year=${formData.year}`);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (show error message, etc.)
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Progress bar */}
      <div className="bg-gray-100 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-medium text-gray-900">Estimation de votre véhicule</h2>
          <span className="text-sm text-gray-500">Étape {step}/3</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        {/* Step 1: Vehicle Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900">Informations sur votre véhicule</h3>
            
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marque</label>
              <select
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleBrandChange}
                className={`mt-1 block w-full py-2 px-3 border ${errors.brand ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">Sélectionnez une marque</option>
                {carBrands.map(brand => (
                  <option key={brand.id} value={brand.id}>{brand.name}</option>
                ))}
              </select>
              {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand}</p>}
            </div>
            
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">Modèle</label>
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                disabled={!formData.brand}
                className={`mt-1 block w-full py-2 px-3 border ${errors.model ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${!formData.brand ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <option value="">Sélectionnez un modèle</option>
                {availableModels.map(model => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>
              {errors.model && <p className="mt-1 text-sm text-red-600">{errors.model}</p>}
            </div>
            
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Année</label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={`mt-1 block w-full py-2 px-3 border ${errors.year ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">Sélectionnez une année</option>
                {years.map(year => (
                  <option key={year.id} value={year.id}>{year.name}</option>
                ))}
              </select>
              {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
            </div>
            
            <div>
              <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">Carburant</label>
              <select
                id="fuel"
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className={`mt-1 block w-full py-2 px-3 border ${errors.fuel ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">Sélectionnez un type de carburant</option>
                {fuelTypes.map(fuel => (
                  <option key={fuel.id} value={fuel.id}>{fuel.name}</option>
                ))}
              </select>
              {errors.fuel && <p className="mt-1 text-sm text-red-600">{errors.fuel}</p>}
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Suivant
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Vehicle Condition */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900">État du véhicule</h3>
            
            <div>
              <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">Kilométrage</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="mileage"
                  id="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  className={`block w-full py-2 px-3 border ${errors.mileage ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Ex: 85000"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">km</span>
                </div>
              </div>
              {errors.mileage && <p className="mt-1 text-sm text-red-600">{errors.mileage}</p>}
            </div>
            
            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700">État général</label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className={`mt-1 block w-full py-2 px-3 border ${errors.condition ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">Sélectionnez l'état du véhicule</option>
                {conditionOptions.map(condition => (
                  <option key={condition.id} value={condition.id}>{condition.name}</option>
                ))}
              </select>
              {errors.condition && <p className="mt-1 text-sm text-red-600">{errors.condition}</p>}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Comment évaluer l'état de votre véhicule ?</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Excellent</strong> : Véhicule comme neuf, sans défaut visible, entretien complet et régulier</li>
                      <li><strong>Bon</strong> : Véhicule bien entretenu avec quelques marques d'usure normales</li>
                      <li><strong>Moyen</strong> : Véhicule fonctionnel nécessitant quelques réparations mineures</li>
                      <li><strong>Mauvais</strong> : Véhicule nécessitant des réparations importantes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Précédent
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Suivant
              </button>
            </div>
          </div>
        ) }
        
        {/* Step 3: Contact Information */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900">Vos coordonnées</h3>
            
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Code postal</label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={`mt-1 block w-full py-2 px-3 border ${errors.zipCode ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Ex: 75001"
              />
              {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full py-2 px-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">J'accepte les conditions d'utilisation</label>
                <p className="text-gray-500">En soumettant ce formulaire, j'accepte que mes données soient traitées conformément à la <a href="/politique-confidentialite" className="text-blue-600 hover:underline">politique de confidentialité</a>.</p>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Précédent
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Estimation en cours...
                  </>
                )  : 'Obtenir mon estimation'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
