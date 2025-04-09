'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface VehicleData {
  brand: string;
  model: string;
  year: string;
  mileage: string;
  price: string;
  fuel: string;
  transmission: string;
  color: string;
  doors: string;
  power: string;
  description: string;
  features: string[];
  images: string[];
}

interface VehicleDataFormProps {
  initialData?: Partial<VehicleData>;
  onSubmit: (data: VehicleData) => void;
  isLoading?: boolean;
}

const fuelTypes = ['Essence', 'Diesel', 'Hybride', 'Électrique', 'GPL', 'Autre'];
const transmissionTypes = ['Manuelle', 'Automatique', 'Semi-automatique'];
const commonFeatures = [
  'Climatisation',
  'GPS',
  'Bluetooth',
  'Régulateur de vitesse',
  'Caméra de recul',
  'Sièges chauffants',
  'Toit ouvrant',
  'Jantes alliage',
  'Aide au stationnement',
  'Système d\'alarme',
  'Vitres électriques',
  'Fermeture centralisée',
];

const VehicleDataForm: React.FC<VehicleDataFormProps> = ({
  initialData = {},
  onSubmit,
  isLoading = false,
}) => {
  const [activeTab, setActiveTab] = useState('general');
  const [data, setData] = useState<VehicleData>({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    fuel: 'Essence',
    transmission: 'Manuelle',
    color: '',
    doors: '5',
    power: '',
    description: '',
    features: [],
    images: [],
    ...initialData,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof VehicleData, string>>>({});
  const [imageUploadProgress, setImageUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof VehicleData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setData((prev) => {
      const features = [...prev.features];
      if (features.includes(feature)) {
        return { ...prev, features: features.filter((f) => f !== feature) };
      } else {
        return { ...prev, features: [...features, feature] };
      }
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Simulate image upload
    setIsUploading(true);
    
    // Mock progress updates
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setImageUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        
        // Add mock image URLs
        const newImageUrls = Array.from(files).map(
          (_, index) => `/mock-images/vehicle-${Date.now()}-${index}.jpg`
        );
        
        setData((prev) => ({
          ...prev,
          images: [...prev.images, ...newImageUrls],
        }));
      }
    }, 300);
  };

  const removeImage = (index: number) => {
    setData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof VehicleData, string>> = {};
    
    // Required fields
    if (!data.brand) newErrors.brand = 'La marque est requise';
    if (!data.model) newErrors.model = 'Le modèle est requis';
    if (!data.year) newErrors.year = 'L\'année est requise';
    if (!data.mileage) newErrors.mileage = 'Le kilométrage est requis';
    if (!data.price) newErrors.price = 'Le prix est requis';
    
    // Validation rules
    const currentYear = new Date().getFullYear();
    const year = parseInt(data.year);
    if (data.year && (isNaN(year) || year < 1900 || year > currentYear + 1)) {
      newErrors.year = `L'année doit être entre 1900 et ${currentYear + 1}`;
    }
    
    const mileage = parseInt(data.mileage);
    if (data.mileage && (isNaN(mileage) || mileage < 0)) {
      newErrors.mileage = 'Le kilométrage doit être un nombre positif';
    }
    
    const price = parseFloat(data.price);
    if (data.price && (isNaN(price) || price <= 0)) {
      newErrors.price = 'Le prix doit être un nombre positif';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(data);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('general')}
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'general'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Informations générales
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'details'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Caractéristiques
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'images'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab('description')}
            className={`py-4 px-6 font-medium text-sm ${
              activeTab === 'description'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Description
          </button>
        </nav>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6">
        {/* General Information Tab */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Informations générales</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                  Marque *
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={data.brand}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.brand ? 'border-red-300' : ''
                  }`}
                />
                {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand}</p>}
              </div>
              
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                  Modèle *
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={data.model}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.model ? 'border-red-300' : ''
                  }`}
                />
                {errors.model && <p className="mt-1 text-sm text-red-600">{errors.model}</p>}
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                  Année *
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={data.year}
                  onChange={handleChange}
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.year ? 'border-red-300' : ''
                  }`}
                />
                {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
              </div>
              
              <div>
                <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">
                  Kilométrage * (km)
                </label>
                <input
                  type="number"
                  id="mileage"
                  name="mileage"
                  value={data.mileage}
                  onChange={handleChange}
                  min="0"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.mileage ? 'border-red-300' : ''
                  }`}
                />
                {errors.mileage && <p className="mt-1 text-sm text-red-600">{errors.mileage}</p>}
              </div>
              
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Prix * (€)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.price ? 'border-red-300' : ''
                  }`}
                />
                {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
              </div>
              
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                  Couleur
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={data.color}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Details Tab */}
        {activeTab === 'details' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Caractéristiques techniques</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
                  Carburant
                </label>
                <select
                  id="fuel"
                  name="fuel"
                  value={data.fuel}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {fuelTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                  Transmission
                </label>
                <select
                  id="transmission"
                  name="transmission"
                  value={data.transmission}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {transmissionTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="doors" className="block text-sm font-medium text-gray-700">
                  Nombre de portes
                </label>
                <select
                  id="doors"
                  name="doors"
                  value={data.doors}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {['2', '3', '4', '5'].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="power" className="block text-sm font-medium text-gray-700">
                  Puissance (ch)
                </label>
                <input
                  type="number"
                  id="power"
                  name="power"
                  value={data.power}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-medium text-gray-900 mb-3">Équipements et options</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {commonFeatures.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <input
                      id={`feature-${feature}`}
                      type="checkbox"
                      checked={data.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`feature-${feature}`} className="ml-2 block text-sm text-gray-700">
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Images Tab */}
        {activeTab === 'images' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Images du véhicule</h3>
            
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Télécharger des images</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                    />
                  </label>
                  <p className="pl-1">ou glisser-déposer</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
              </div>
            </div>
            
            {isUploading && (
              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Téléchargement en cours
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {imageUploadProgress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${imageUploadProgress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            )}
            
            {data.images.length > 0 && (
              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-900 mb-3">Images téléchargées</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                        {/* Placeholder for image */}
                        <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-500">
                          Image {index + 1}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Description Tab */}
        {activeTab === 'description' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Description du véhicule</h3>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description détaillée
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  value={data.description}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Décrivez l'état du véhicule, son historique, ses points forts..."
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Une description détaillée et honnête augmente la confiance des acheteurs potentiels.
              </p>
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="mt-8 pt-5 border-t border-gray-200 flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Enregistrement...' : 'Enregistrer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleDataForm;
