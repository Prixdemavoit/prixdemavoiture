import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Estimer ma voiture | Prix de ma voiture',
  description: 'Estimez gratuitement la valeur de votre véhicule en quelques clics',
};

export default function EstimationPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Estimez votre véhicule
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Obtenez une estimation précise de la valeur de votre véhicule en quelques clics
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Informations du véhicule</h2>
              <p className="mt-1 text-sm text-gray-500">
                Remplissez les informations ci-dessous ou prenez une photo de votre plaque d'immatriculation pour un remplissage automatique.
              </p>

              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                  Prendre une photo de ma plaque
                </button>
              </div>

              <div className="mt-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Marque
                      </label>
                      <div className="mt-1">
                        <select
                          id="brand"
                          name="brand"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">Sélectionnez une marque</option>
                          <option>Renault</option>
                          <option>Peugeot</option>
                          <option>Citroën</option>
                          <option>Volkswagen</option>
                          <option>BMW</option>
                          <option>Audi</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                        Modèle
                      </label>
                      <div className="mt-1">
                        <select
                          id="model"
                          name="model"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">Sélectionnez un modèle</option>
                          <option>Clio</option>
                          <option>Mégane</option>
                          <option>Captur</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                        Année
                      </label>
                      <div className="mt-1">
                        <select
                          id="year"
                          name="year"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">Année</option>
                          <option>2023</option>
                          <option>2022</option>
                          <option>2021</option>
                          <option>2020</option>
                          <option>2019</option>
                          <option>2018</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
                        Carburant
                      </label>
                      <div className="mt-1">
                        <select
                          id="fuel"
                          name="fuel"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">Carburant</option>
                          <option>Essence</option>
                          <option>Diesel</option>
                          <option>Hybride</option>
                          <option>Électrique</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                        Transmission
                      </label>
                      <div className="mt-1">
                        <select
                          id="transmission"
                          name="transmission"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">Transmission</option>
                          <option>Manuelle</option>
                          <option>Automatique</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">
                        Kilométrage
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="mileage"
                          id="mileage"
                          placeholder="Ex: 45000"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
                        État général
                      </label>
                      <div className="mt-1">
                        <select
                          id="condition"
                          name="condition"
                          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">État général</option>
                          <option>Excellent</option>
                          <option>Très bon</option>
                          <option>Bon</option>
                          <option>Moyen</option>
                          <option>À rénover</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photos du véhicule (optionnel) 
                    </label>
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
                            <span>Télécharger des photos</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                          </label>
                          <p className="pl-1">ou glisser-déposer</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Estimer mon véhicule
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Comment ça marche ?</h2>
              <div className="mt-4 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <span className="text-lg font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Renseignez les informations de votre véhicule</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Complétez le formulaire avec les caractéristiques de votre véhicule ou prenez simplement une photo de votre plaque d'immatriculation.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <span className="text-lg font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Obtenez une estimation précise</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Notre algorithme analyse les données du marché en temps réel pour vous fournir une estimation précise de la valeur de votre véhicule.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <span className="text-lg font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Recevez des offres de professionnels</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Publiez votre annonce et recevez des offres fermes de professionnels près de chez vous, sans engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
