import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Prix de ma voiture - Estimation et vente de véhicules',
  description: 'Obtenez une estimation gratuite et précise de la valeur de votre véhicule en quelques clics',
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-blue-600 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white">Prix de ma voiture</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Obtenez une estimation précise de la valeur de votre véhicule en quelques clics et recevez des offres de professionnels.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="/estimation"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              Estimer ma voiture
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Pourquoi nous choisir</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900">
              Une solution simple et efficace
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Nous vous accompagnons à chaque étape de la vente de votre véhicule.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Estimation rapide</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Obtenez une estimation précise de la valeur de votre véhicule en moins de 2 minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Offres de professionnels</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Recevez des offres de reprise de la part de professionnels de l'automobile près de chez vous.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Sécurité garantie</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Toutes les transactions sont sécurisées et vos données personnelles sont protégées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <h2 className="text-3xl font-extrabold text-white">
            <span className="block">Prêt à vendre votre véhicule ?</span>
            <span className="block text-blue-200">Commencez dès maintenant avec une estimation gratuite.</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row">
            <a
              href="/estimation"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
            >
              Estimer ma voiture
            </a>
            <a
              href="/blog"
              className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Consulter notre blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
