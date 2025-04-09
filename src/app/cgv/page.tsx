import React from 'react';

export const metadata = {
  title: 'Conditions Générales de Vente | Prix de ma voiture',
  description: 'Conditions générales de vente régissant l\'utilisation des services de prixdemavoiture.fr',
};

export default function CGVPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">Conditions Générales de Vente</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              En vigueur au 1er avril 2025
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Article 1 - Champ d'application</h2>
            
            <p className="text-sm text-gray-600 mb-4">
              Les présentes Conditions Générales de Vente (ci-après "CGV") s'appliquent, sans restriction ni réserve, à l'ensemble des services proposés par la société PrixDeMaVoiture SAS (ci-après "le Prestataire") sur son site internet prixdemavoiture.fr (ci-après "le Site").
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Les caractéristiques principales des Services sont présentées sur le Site. Le Client est tenu d'en prendre connaissance avant toute souscription. Le choix et l'achat d'un Service est de la seule responsabilité du Client.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Ces CGV sont accessibles à tout moment sur le Site et prévaudront sur toute autre version ou tout autre document contradictoire. Sauf preuve contraire, les données enregistrées dans le système informatique du Prestataire constituent la preuve de l'ensemble des transactions conclues avec le Client.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978, renforcée et complétée par le RGPD (règlement général sur la protection des données) entré en vigueur le 25 mai 2018, le Client dispose, à tout moment, d'un droit d'accès, de rectification, d'opposition, d'effacement et de portabilité de l'ensemble de ses données personnelles en écrivant, par courrier et en justifiant de son identité, à l'adresse du Prestataire mentionnée à l'article 12 des présentes CGV.
            </p>
            
            <p className="text-sm text-gray-600 mb-4">
              Le Client déclare avoir pris connaissance des présentes CGV et les avoir acceptées en cochant la case prévue à cet effet avant la mise en œuvre de la procédure de commande en ligne ainsi que des conditions générales d'utilisation du Site.
            </p>
          </div>
          
          <!-- Articles 2 à 13 omis pour brièveté -->
          
        </div>
      </div>
    </div>
  );
}
