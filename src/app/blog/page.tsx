import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Prix de ma voiture',
  description: 'Actualités, conseils et guides sur l\'automobile, l\'achat et la vente de véhicules',
};

// Types
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

// Mock data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Comment bien préparer sa voiture pour la vente ?',
    excerpt: 'Découvrez nos conseils pour maximiser la valeur de votre véhicule et attirer plus d\'acheteurs potentiels.',
    date: '5 avril 2025',
    author: 'Thomas Martin',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'comment-bien-preparer-sa-voiture-pour-la-vente'
  },
  {
    id: '2',
    title: 'Les avantages de la certification blockchain pour votre véhicule',
    excerpt: 'La technologie blockchain révolutionne le marché de l\'automobile d\'occasion. Voici pourquoi vous devriez certifier l\'historique de votre véhicule.',
    date: '28 mars 2025',
    author: 'Sophie Dubois',
    category: 'Technologie',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'avantages-certification-blockchain-vehicule'
  },
  {
    id: '3',
    title: 'Voitures électriques : guide d\'achat 2025',
    excerpt: 'Tout ce que vous devez savoir avant d\'acheter un véhicule électrique cette année : autonomie, recharge, aides gouvernementales...',
    date: '15 mars 2025',
    author: 'Lucas Bernard',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bfcf637dd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'voitures-electriques-guide-achat-2025'
  },
  {
    id: '4',
    title: 'Les erreurs à éviter lors de l\'achat d\'un véhicule d\'occasion',
    excerpt: 'Ne tombez pas dans les pièges classiques ! Voici les points à vérifier et les questions à poser avant d\'acheter une voiture d\'occasion.',
    date: '2 mars 2025',
    author: 'Thomas Martin',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'erreurs-eviter-achat-vehicule-occasion'
  },
  {
    id: '5',
    title: 'Comment négocier efficacement le prix d\'une voiture ?',
    excerpt: 'Techniques et astuces pour obtenir le meilleur prix possible lors de l\'achat ou de la vente d\'un véhicule.',
    date: '18 février 2025',
    author: 'Sophie Dubois',
    category: 'Négociation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'comment-negocier-efficacement-prix-voiture'
  },
  {
    id: '6',
    title: 'Les tendances du marché automobile en 2025',
    excerpt: 'Analyse des évolutions du marché, des modèles les plus recherchés et des prévisions pour les mois à venir.',
    date: '5 février 2025',
    author: 'Lucas Bernard',
    category: 'Marché',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'tendances-marche-automobile-2025'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'Tous les articles' },
  { id: 'Conseils', name: 'Conseils' },
  { id: 'Guides', name: 'Guides' },
  { id: 'Technologie', name: 'Technologie' },
  { id: 'Négociation', name: 'Négociation' },
  { id: 'Marché', name: 'Marché' }
];

export default function BlogPage()  {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog PrixDeMaVoiture
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Actualités, conseils et guides sur l'automobile, l'achat et la vente de véhicules
          </p>
        </div>
        
        {/* Featured post */}
        <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative h-64 md:h-auto md:w-1/2">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                {blogPosts[0].category}
              </div>
              <Link href={`/blog/${blogPosts[0].slug}`} className="block mt-1 text-2xl font-semibold text-gray-900 hover:underline">
                {blogPosts[0].title}
              </Link>
              <p className="mt-2 text-gray-500">
                {blogPosts[0].excerpt}
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full bg-blue-600 text-white text-center leading-10">
                    {blogPosts[0].author.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {blogPosts[0].author}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2020-03-16">{blogPosts[0].date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>8 min de lecture</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Lire l'article
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Blog posts grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                  <span className="mx-2">&bull;</span>
                  <time dateTime="2020-03-16">{post.date}</time>
                </div>
                <Link href={`/blog/${post.slug}`} className="block mt-2 text-xl font-semibold text-gray-900 hover:underline">
                  {post.title}
                </Link>
                <p className="mt-3 text-base text-gray-500">
                  {post.excerpt}
                </p>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-block h-8 w-8 rounded-full bg-blue-600 text-white text-center leading-8 text-sm">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Lire la suite &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12 lg:px-16 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Restez informé des dernières actualités automobiles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, conseils et actualités du marché automobile.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">Adresse email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Votre adresse email"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                >
                  S'inscrire
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-blue-200">
              Nous respectons votre vie privée. Désabonnez-vous à tout moment.
            </p>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-between">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            &larr; Précédent
          </button>
          <div className="hidden md:flex">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-blue-500 text-sm font-medium rounded-md text-white bg-blue-600"
            >
              1
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              2
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              3
            </button>
            <span className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white">
              ...
            </span>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              8
            </button>
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Suivant &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
