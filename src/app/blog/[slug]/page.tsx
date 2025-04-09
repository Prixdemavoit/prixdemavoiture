import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  authorTitle: string;
  authorImage: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
}

// Mock data for a single blog post
const blogPost: BlogPost = {
  id: '1',
  title: 'Comment bien préparer sa voiture pour la vente ?',
  content: `
  <p>La vente d'une voiture d'occasion peut sembler intimidante, mais avec une bonne préparation, vous pouvez maximiser sa valeur et attirer davantage d'acheteurs potentiels. Dans cet article, nous vous guidons à travers les étapes essentielles pour préparer votre véhicule à la vente.</p>
  
  <h2>1. Nettoyage professionnel</h2>
  
  <p>La première impression est cruciale. Un véhicule propre et bien entretenu donne immédiatement une meilleure image aux acheteurs potentiels. Investissez dans un nettoyage professionnel complet, intérieur et extérieur :</p>
  
  <ul>
    <li>Lavage et polissage de la carrosserie</li>
    <li>Nettoyage des jantes et des pneus</li>
    <li>Aspiration et shampouinage des sièges et tapis</li>
    <li>Nettoyage du tableau de bord et des surfaces intérieures</li>
    <li>Lavage des vitres (intérieur et extérieur)</li>
  </ul>
  
  <p>Si votre budget est limité, vous pouvez réaliser vous-même un nettoyage approfondi, mais n'hésitez pas à faire appel à un professionnel pour les finitions (polissage, traitement des cuirs, etc.).</p>
  
  <h2>2. Réparations mineures</h2>
  
  <p>Les petits défauts peuvent avoir un impact disproportionné sur la perception de votre véhicule. Prenez le temps de corriger les problèmes mineurs :</p>
  
  <ul>
    <li>Remplacez les ampoules grillées</li>
    <li>Réparez les petites rayures et éclats de peinture</li>
    <li>Fixez les éléments intérieurs détachés ou usés</li>
    <li>Remplacez les essuie-glaces usés</li>
    <li>Réparez ou remplacez les rétroviseurs endommagés</li>
  </ul>
  
  <p>Pour les réparations plus importantes, faites un calcul coût-bénéfice : certaines réparations peuvent augmenter la valeur de revente plus que leur coût, tandis que d'autres non.</p>
  
  <h2>3. Maintenance à jour</h2>
  
  <p>Un historique d'entretien complet rassure les acheteurs sur l'état mécanique du véhicule :</p>
  
  <ul>
    <li>Effectuez la vidange si elle est due prochainement</li>
    <li>Vérifiez et remplacez les filtres si nécessaire</li>
    <li>Contrôlez les niveaux de liquides (freins, direction assistée, refroidissement)</li>
    <li>Vérifiez l'état de la batterie</li>
    <li>Contrôlez l'état des pneus et leur pression</li>
  </ul>
  
  <p>Conservez toutes les factures et documents d'entretien pour les présenter aux acheteurs potentiels.</p>
  
  <h2>4. Contrôle technique récent</h2>
  
  <p>Un contrôle technique de moins de 6 mois est un argument de vente majeur. Il rassure l'acheteur sur l'état général du véhicule et facilite les démarches administratives lors de la vente.</p>
  
  <p>Si votre contrôle technique arrive bientôt à échéance, il est préférable de le renouveler avant de mettre votre véhicule en vente. Si des défauts sont identifiés, vous pourrez les corriger avant de présenter le véhicule aux acheteurs potentiels.</p>
  
  <h2>5. Documentation complète</h2>
  
  <p>Rassemblez tous les documents relatifs à votre véhicule :</p>
  
  <ul>
    <li>Carte grise (certificat d'immatriculation)</li>
    <li>Carnet d'entretien à jour</li>
    <li>Factures des réparations et entretiens</li>
    <li>Rapport du dernier contrôle technique</li>
    <li>Manuels d'utilisation</li>
    <li>Garanties encore valables</li>
    <li>Certificat de non-gage (à obtenir en préfecture ou en ligne)</li>
  </ul>
  
  <p>Une documentation complète inspire confiance et peut justifier un prix de vente plus élevé.</p>
  
  <h2>6. Photos de qualité</h2>
  
  <p>Pour votre annonce, prenez des photos de qualité qui mettent en valeur votre véhicule :</p>
  
  <ul>
    <li>Choisissez un lieu bien éclairé, de préférence en extérieur</li>
    <li>Prenez des photos sous plusieurs angles (avant, arrière, côtés)</li>
    <li>N'oubliez pas l'intérieur (sièges, tableau de bord, coffre)</li>
    <li>Photographiez les équipements spécifiques (GPS, toit ouvrant, etc.)</li>
    <li>Documentez les éventuels défauts par honnêteté</li>
  </ul>
  
  <p>Des photos de qualité attirent davantage d'acheteurs potentiels et réduisent les risques de déception lors de la visite.</p>
  
  <h2>7. Estimation réaliste du prix</h2>
  
  <p>Utilisez notre outil d'estimation pour déterminer la valeur de marché de votre véhicule. Une estimation précise vous permettra de fixer un prix compétitif tout en maximisant votre retour.</p>
  
  <p>Tenez compte de l'état général, du kilométrage, de l'historique d'entretien et des options de votre véhicule pour affiner cette estimation.</p>
  
  <h2>8. Certification blockchain (optionnelle)</h2>
  
  <p>Pour les véhicules bien entretenus avec un historique complet, envisagez notre service de certification blockchain. Cette technologie permet de garantir l'authenticité de l'historique de votre véhicule et peut augmenter sa valeur de revente de 5 à 10%.</p>
  
  <h2>Conclusion</h2>
  
  <p>La préparation minutieuse de votre véhicule avant sa mise en vente est un investissement qui paie. Non seulement vous augmenterez vos chances de vendre rapidement, mais vous pourrez également justifier un prix plus élevé.</p>
  
  <p>N'oubliez pas que la transparence est essentielle : soyez honnête sur l'état de votre véhicule et son historique. Une relation de confiance avec l'acheteur potentiel facilite la négociation et la conclusion de la vente.</p>
  `,
  date: '5 avril 2025',
  author: 'Thomas Martin',
  authorTitle: 'Expert automobile',
  authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  category: 'Conseils',
  image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  slug: 'comment-bien-preparer-sa-voiture-pour-la-vente',
  readTime: '8 min de lecture'
};

// Related posts
const relatedPosts = [
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
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } })  {
  // In a real app, we would fetch the blog post based on the slug
  // const { slug } = params;
  
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Accueil
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/blog" className="ml-2 text-gray-500 hover:text-gray-700">
                Blog
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-700" aria-current="page">
                {blogPost.title}
              </span>
            </li>
          </ol>
        </nav>
        
        {/* Article header */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {blogPost.category}
              </span>
              <span className="mx-2">&bull;</span>
              <time dateTime="2025-04-05">{blogPost.date}</time>
              <span className="mx-2">&bull;</span>
              <span>{blogPost.readTime}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0">
                <Image
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {blogPost.author}
                </p>
                <p className="text-sm text-gray-500">
                  {blogPost.authorTitle}
                </p>
              </div>
            </div>
            
            {/* Article content */}
            <div 
              className="prose prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* Share buttons */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Partager cet article</h3>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Author bio */}
        <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {blogPost.author}
                </h3>
                <p className="text-sm text-gray-500">
                  {blogPost.authorTitle}
                </p>
              </div>
            </div>
            <div className="mt-4 text-gray-600">
              <p>
                Expert automobile avec plus de 15 ans d'expérience dans le secteur. Passionné par les nouvelles technologies et leur impact sur l'industrie automobile. Auteur de nombreux articles et guides sur l'achat et la vente de véhicules.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Articles similaires
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.map((post)  => (
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
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Lire la suite &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-white">
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
      </div>
    </div>
  );
}
