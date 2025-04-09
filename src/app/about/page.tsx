import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'À propos | Prix de ma voiture',
  description: 'Découvrez notre mission et notre équipe dédiée à simplifier la vente et l\'achat de véhicules',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            À propos de PrixDeMaVoiture
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Notre mission est de simplifier la vente et l'achat de véhicules en toute transparence
          </p>
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900">Notre histoire</h2>
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
              <p>
                Fondée en 2023, PrixDeMaVoiture est née d'un constat simple : vendre ou acheter un véhicule d'occasion est souvent un parcours semé d'embûches, marqué par le manque de transparence, la complexité administrative et l'incertitude sur la valeur réelle des véhicules.
              </p>
              <p>
                Notre équipe de passionnés d'automobile et d'experts en technologie s'est donnée pour mission de révolutionner ce marché en créant une plateforme qui met la transparence, la sécurité et la simplicité au cœur de chaque transaction.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900">Notre mission</h2>
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
              <p>
                Chez PrixDeMaVoiture, nous croyons que l'achat et la vente de véhicules devraient être des expériences simples, transparentes et sécurisées. Notre mission est de:
              </p>
              <ul>
                <li>Fournir des estimations précises basées sur des données réelles du marché</li>
                <li>Connecter directement vendeurs et acheteurs sans intermédiaires coûteux</li>
                <li>Garantir la sécurité des transactions grâce à la certification blockchain</li>
                <li>Simplifier toutes les démarches administratives liées à l'achat et à la vente</li>
                <li>Offrir un service client exceptionnel à chaque étape du processus</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900">Notre équipe</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Thomas Martin"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Thomas Martin</h3>
                <p className="text-sm text-gray-500">Co-fondateur & CEO</p>
                <p className="mt-2 text-sm text-gray-500">
                  Ancien directeur commercial chez un grand constructeur automobile, Thomas apporte son expertise du marché et sa vision stratégique.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Sophie Dubois"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Sophie Dubois</h3>
                <p className="text-sm text-gray-500">Co-fondatrice & CTO</p>
                <p className="mt-2 text-sm text-gray-500">
                  Ingénieure en informatique spécialisée en IA, Sophie a développé nos algorithmes d'estimation et notre technologie blockchain.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Lucas Bernard"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Lucas Bernard</h3>
                <p className="text-sm text-gray-500">Directeur des Opérations</p>
                <p className="mt-2 text-sm text-gray-500">
                  Expert en logistique et en gestion de la relation client, Lucas veille à ce que chaque transaction se déroule parfaitement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900">Notre technologie</h2>
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
              <p>
                Nous utilisons les technologies les plus avancées pour offrir un service fiable et innovant :
              </p>
              <ul>
                <li><strong>Intelligence artificielle</strong> : Nos algorithmes analysent des millions de données pour fournir des estimations précises.</li>
                <li><strong>Blockchain</strong> : Nous certifions l'historique et l'authenticité des véhicules grâce à la technologie blockchain.</li>
                <li><strong>Reconnaissance d'images</strong> : Notre technologie OCR permet d'extraire automatiquement les informations des plaques d'immatriculation.</li>
                <li><strong>Plateforme cloud sécurisée</strong> : Toutes vos données sont protégées par les standards de sécurité les plus élevés.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900">Nos valeurs</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Transparence</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Nous croyons que la transparence est la clé d'une transaction réussie. C'est pourquoi nous fournissons toutes les informations nécessaires sur chaque véhicule.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Sécurité</h3>
                    <p className="mt-2 text-base text-gray-500">
                      La sécurité des transactions et la protection des données personnelles sont au cœur de nos préoccupations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Service client</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Notre équipe de support est disponible 7j/7 pour vous accompagner à chaque étape de votre projet automobile.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Confiance</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Nous construisons des relations de confiance durables avec nos clients en leur offrant un service fiable et honnête.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Rejoignez-nous dans cette aventure</h2>
            <p className="mt-4 text-lg text-gray-500">
              Que vous souhaitiez vendre ou acheter un véhicule, nous sommes là pour vous accompagner à chaque étape.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) ;
}
