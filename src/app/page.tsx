import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Estimez et vendez votre voiture au meilleur prix
            </h1>
            <p className="text-xl mb-8">
              Obtenez une estimation gratuite en quelques clics et vendez votre véhicule rapidement et en toute sécurité.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/estimation" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                Estimer ma voiture
              </Link>
              <Link href="/annonces" className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300">
                Voir les annonces
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/3 h-32 md:h-full bg-contain bg-no-repeat bg-right-bottom opacity-20 md:opacity-70">
          {/* Placeholder for car image */}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Comment ça marche ?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Un processus simple et transparent pour vendre votre véhicule
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Estimez votre voiture</h3>
              <p className="text-gray-600">
                Remplissez notre formulaire détaillé pour obtenir une estimation précise de la valeur de votre véhicule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Créez votre annonce</h3>
              <p className="text-gray-600">
                Publiez votre annonce avec photos et description détaillée pour attirer les acheteurs potentiels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Vendez au meilleur prix</h3>
              <p className="text-gray-600">
                Recevez des offres, négociez en toute sécurité et finalisez la vente avec notre accompagnement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à vendre votre voiture ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Rejoignez les milliers de propriétaires qui ont vendu leur véhicule rapidement et au meilleur prix grâce à notre plateforme.
          </p>
          <Link href="/estimation" className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 text-lg">
            Estimer gratuitement
          </Link>
        </div>
      </div>

      {/* Recent Listings Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Annonces récentes</h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez les derniers véhicules mis en vente sur notre plateforme
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for car listings */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  {/* Placeholder for car image */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Renault Clio 1.5 dCi</h3>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">2020</span>
                    <span className="text-gray-600">45 000 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">12 990 €</span>
                    <Link href="/vehicule/1" className="text-blue-600 hover:text-blue-800 font-medium">
                      Voir détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/annonces" className="inline-block text-blue-600 hover:text-blue-800 font-semibold">
              Voir toutes les annonces →
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Ce que disent nos clients</h2>
            <p className="mt-4 text-lg text-gray-600">
              Des milliers de propriétaires satisfaits ont vendu leur véhicule avec nous
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Jean Dupont</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ) )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "J'ai vendu ma voiture en moins d'une semaine grâce à prixdemavoiture.fr. L'estimation était précise et j'ai obtenu un excellent prix !"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
